import React, { Component } from "react";
import { Main } from "../../common/Main";
import { Title, Wrapper } from "./styled";

class HaircutReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      selectedService: "",
      selectedOderService: "", // Poprawiona nazwa pola
      date: "",
      time: "",
      additionalNotes: "",
      message: "", // Dodane pole message do stanu
      busyTimes: [],
      reservationDuration: 30,
    };
  }

  componentDidMount() {
    this.getReservedTimes(); // Dodane wywołanie funkcji pobierającej zarezerwowane terminy
  }

  // Dodana funkcja do pobierania zarezerwowanych terminów
  getReservedTimes = async () => {
    try {
      const response = await fetch("http://localhost:3001/getReservedTimes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.setState({ busyTimes: data.reservedTimes });
    } catch (error) {
      console.error("Błąd pobierania zarezerwowanych terminów:", error);
    }
  };

  // Dodana funkcja do pobierania minimalnej daty na podstawie zarezerwowanych terminów
  getMinDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectedService") {
      const reservationDuration = this.calculateReservationDuration(value);
      this.setState({ [name]: value, reservationDuration });
    } else {
      this.setState({ [name]: value });
    }
  };

  calculateReservationDuration = (selectedService) => {
    switch (selectedService) {
      case "Strzyżenie":
        return 30;
      case "Koloryzacja":
        return 120;
      case "Stylizacja":
        return 60;
      case "Solarium stojące":
      case "Solarium leżące":
        return 10;
      default:
        return 30;
    }
  };

  isTimeSlotAvailable = () => {
    const { date, time, selectedService } = this.state;
    const selectedDateTime = `${date} ${time}`;
  
    // Sprawdzamy, czy termin jest już zarezerwowany
    if (this.state.busyTimes.includes(selectedDateTime)) {
      return false;
    }
  
    // Sprawdzamy, czy termin jest zablokowany dla danej usługi fryzjerskiej
    const isTimeSlotBlocked = this.state.busyTimes.some((busyTime) => {
      const [busyDateTime, busyService] = busyTime.split(" ");
      return busyDateTime === selectedDateTime && busyService !== selectedService;
    });
  
    return !isTimeSlotBlocked;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { date, time, reservationDuration } = this.state;

    if (this.isTimeSlotAvailable()) {
      try {
        const response = await fetch(
          "http://localhost:3001/submitReservation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...this.state,
              endTime: this.calculateEndTime(time, reservationDuration),
            }),
          }
        );

        if (response.ok) {
          // Obsługa sukcesu
          this.setState({
            message: "Rezerwacja udana!",
            busyTimes: [...this.state.busyTimes, `${date} ${time}`],
          });
        } else {
          // Obsługa błędu
          const errorData = await response.json(); // Odczytaj dane błędu z odpowiedzi
          this.setState({
            message: `Wystąpił błąd: ${errorData.error}. Spróbuj ponownie.`,
          });
        }
      } catch (error) {
        console.error("Błąd sieci:", error);
        this.setState({
          message: "Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.",
        });
      }
    } else {
      alert("Sorki, wybrany termin jest już zajęty. Wybierz inny termin.");
    }
  };

  calculateEndTime = (startTime, duration) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const endMinute = startMinute + duration;

    let endHour = startHour + Math.floor(endMinute / 60);
    endHour = endHour % 24; 
    const formattedEndHour = endHour.toString().padStart(2, "0");
    const formattedEndMinute = (endMinute % 60).toString().padStart(2, "0");

    return `${formattedEndHour}:${formattedEndMinute}`;
  };

  render() {
    return (
      <Main>
        <Wrapper>
          {this.state.message && (
            <div className="message">{this.state.message}</div>
          )}
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
