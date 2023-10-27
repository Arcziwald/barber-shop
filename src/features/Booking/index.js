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
      selectedService: "Strzyżenie",
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isTimeSlotAvailable()) {
      // Tutaj możesz dodać obsługę wysłania formularza, na przykład wywołując odpowiednią funkcję.
      // Możesz przekazać stan tego komponentu do tej funkcji, aby uzyskać dane wprowadzone przez użytkownika.
    } else {
      alert("Wybrany termin jest zajęty. Proszę wybrać inny termin.");
    }
  }

  render() {
    return (
      <Main>
        <Wrapper>
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
            />

            <label htmlFor="phoneNumber">Numer telefonu:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
              required
            />

            <label htmlFor="email">Adres email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              autoComplete="username"
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
              <option value="Inna">Inna (proszę podać)</option>
            </select>

            <label htmlFor="selectedStylist">Wybierz preferowanego fryzjera:</label>
            <input
              type="text"
              id="selectedStylist"
              name="selectedStylist"
              value={this.state.selectedStylist}
              onChange={this.handleInputChange}
            />

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
