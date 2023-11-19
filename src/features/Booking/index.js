import React, { Component } from "react";
import { Main } from "../../common/Main";
import {
  Wrapper,
  Title,
  Message,
  Form,
  Label,
  Input,
  DateAndTimeWrapper,
  DateInput,
  TimeInput,
  Select,
  Textarea,
  Button,
  FormSection,
  LeftSection,
  RightSection,
} from "./styled";

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
      return (
        busyDateTime === selectedDateTime && busyService !== selectedService
      );
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
            message: "Rezerwacja udana 😎",
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
        <Form onSubmit={this.handleSubmit}>
          {this.state.message && <Message>{this.state.message}</Message>}
          
            <Title>Zarezerwuj termin</Title>
            <FormSection>
              <LeftSection>
                <Label>Imię i nazwisko:</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                  autoComplete="name"
                />
    
                <Label>Numer telefonu:</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleInputChange}
                  required
                  autoComplete="tel"
                />
    
                <Label>Adres email:</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                  autoComplete="email"
                />
              </LeftSection>
              <RightSection>
                <Label htmlFor="selectedService">Wybierz usługę fryzjerską:</Label>
                <Select
                  id="selectedService"
                  name="selectedService"
                  value={this.state.selectedService}
                  onChange={this.handleInputChange}
                >
                  <option value="">-wybierz-</option>
                  <option value="Strzyżenie">Strzyżenie</option>
                  <option value="Koloryzacja">Koloryzacja</option>
                  <option value="Stylizacja">Stylizacja</option>
                  <option value="Inna">Inna (napisz w uwagach)</option>
                </Select>
    
                <Label htmlFor="selectedOderService">Wybierz inną usługę:</Label>
                <Select
                  id="selectedOderService"
                  name="selectedOderService"
                  value={this.state.selectedOderService}
                  onChange={this.handleInputChange}
                  >
              <option value="">-wybierz-</option>
              <option value="Solarium stojące">Solarium stojące</option>
              <option value="Solarium leżące">Solarium leżące</option>
              <option value="Inna">Inna (napisz w uwagach)</option>
            </Select>
            
              </RightSection>
            </FormSection>
            <DateAndTimeWrapper>
              <div>
                <Label htmlFor="date">Data:</Label>
                <DateInput
                  type="date"
                  id="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  min={this.getMinDate()}
                />
              </div>
              <div>
                <Label htmlFor="time">Godzina:</Label>
                <TimeInput
                  type="time"
                  id="time"
                  name="time"
                  value={this.state.time}
                  onChange={this.handleInputChange}
                  disabled={!this.isTimeSlotAvailable()}
                />
              </div>
            </DateAndTimeWrapper>
            <Label htmlFor="additionalNotes">Dodatkowe informacje:</Label>
            <Textarea
              id="additionalNotes"
              name="additionalNotes"
              value={this.state.additionalNotes}
              onChange={this.handleInputChange}
            />
    
            <Button type="submit">Zarejestruj</Button>
          </Form>
        </Wrapper>
      </Main>
    );
  }
}

export default HaircutReservationForm;
