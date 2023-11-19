import React, { Component } from "react";
import { Main } from "../../common/Main";
import { Title, Wrapper } from "./styled";

// Zakładamy, że masz dostęp do listy zajętych terminów w formie tablicy busyTimes
const busyTimes = ["2023-11-01 10:00", "2023-11-01 14:30", "2023-11-02 15:15"];

class HaircutReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      selectedService: "",
      selectedStylist: "",
      date: "",
      time: "",
      additionalNotes: "",
    };
  }

  // Definicja funkcji getMinDate
  getMinDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  isTimeSlotAvailable = () => {
    const selectedDateTime = `${this.state.date} ${this.state.time}`;
    return !busyTimes.includes(selectedDateTime);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.isTimeSlotAvailable()) {
      try {
        const response = await fetch("http://localhost:3001/submitReservation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        });
  
        if (response.ok) {
          // Obsługa sukcesu
          this.setState({ message: "Rezerwacja udana!" });
        } else {
          // Obsługa błędu
          this.setState({ message: "Wystąpił błąd podczas rezerwacji. Spróbuj ponownie." });
        }
      } catch (error) {
        console.error("Błąd sieci:", error);
      }
    } else {
      alert("Soreczka, wybrany termin jest już zajęty. Upoluj sobie inny termin.");
    }
  };

  render() {
    return (
      <Main>
        <Wrapper>
        {this.state.message && <div className="message">{this.state.message}</div>}
          <Title>Zarezerwuj termin fryzjerski</Title>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Imię i nazwisko:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
              autoComplete="name" // Dodaj atrybut autocomplete
            />

            <label htmlFor="phoneNumber">Numer telefonu:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              required
              autoComplete="tel"
            />

            <label htmlFor="email">Adres email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              autoComplete="email"
            />

            <label htmlFor="selectedService">Wybierz usługę fryzjerską:</label>
            <select
              id="selectedService"
              name="selectedService"
              value={this.state.selectedService}
              onChange={this.handleInputChange}
            >
              <option value="Strzyżenie">Strzyżenie</option>
              <option value="Koloryzacja">Koloryzacja</option>
              <option value="Stylizacja">Stylizacja</option>
              <option value="Inna">Inna (napisz w uwagach)</option>
            </select>
            
            <label htmlFor="selectedOderService">Wybierz inną usługę:</label>
            <select
              id="selectedOderService"
              name="selectedOderService"
              value={this.state.selectedOderService}
              onChange={this.handleInputChange}
            >
              <option value="Solarium stojące">Solarium stojące</option>
              <option value="Solarium leżące">Solarium leżące</option>
              <option value="Inna">Inna (napisz w uwagach)</option>
            </select>

            <label htmlFor="date">Data preferowanego terminu:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
              min={this.getMinDate()} // Ustalamy minimalną datę na podstawie zajętych terminów
            />

            <label htmlFor="time">Godzina preferowanego terminu:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={this.state.time}
              onChange={this.handleInputChange}
              disabled={!this.isTimeSlotAvailable()} // Wyłączamy pole czasu, jeśli jest zajęte
            />

            <label htmlFor="additionalNotes">Dodatkowe uwagi:</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={this.state.additionalNotes}
              onChange={this.handleInputChange}
            />

            <button type="submit">Zarejestruj</button>
          </form>
        </Wrapper>
      </Main>
    );
  }
}

export default HaircutReservationForm;
