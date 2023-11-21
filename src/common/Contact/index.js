import { useState } from "react";
import { Main } from "../Main";
import {
  MainContainer,
  Tiles,
  Title,
  Button,
  Label,
  Form,
  Input,
  Textarea,
} from "./styled";

export const Contact = () => {
  const [imie, setImie] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [wiadomosc, setWiadomosc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę obsługi formularza, np. wysyłanie danych do serwera
    console.log("Dane formularza:", { imie, email, wiadomosc });
  };

  const handleShowOnMap = () => {
    // Dodatkowe informacje, takie jak lokalizacja lub kod pocztowy
    const additionalInfo = "Unit2 Irishtown, Athlone";
    // Nazwa salonu fryzjerskiego "Eva's Barber Shop"
    const placeName = "Eva's Barber Shop";
    // Otwieranie linku z konkretną lokalizacją fryzjera w Google Maps
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        placeName + " " + additionalInfo
      )}`,
      "_blank"
    );
  };

  return (
    <Main>
      <Title>Kontakt</Title>
      <MainContainer>
        <Tiles>
          <Form onSubmit={handleSubmit}>
            <div>
              <Label>
                <Input
                  type="text"
                  value={imie}
                  onChange={(e) => setImie(e.target.value)}
                  placeholder="Twoje imię i nazwisko"
                  required
                />
              </Label>
              <br />
              <Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój adres email"
                  required
                />
              </Label>
              <br />
              <Label>
                <Input
                  type="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="Twój numer telefonu"
                  required
                />
              </Label>
              <br />
            </div>
            <Label>
              <Textarea
                value={wiadomosc}
                onChange={(e) => setWiadomosc(e.target.value)}
                placeholder="Treść wiadomości"
                required
              />
            </Label>

            <Button type="submit">Wyślij</Button>
          </Form>{" "}
        </Tiles>
        <Tiles>
          <Label>
            <h1>Eva`s Barber Shop </h1>
            Unit2 Irishtown <br />
            Athlone, Co. Weastmeath <br />
            ☎️tel. +353 89 220 26 22
            <br />
            📧email: evasbarbershop@gmail.com
          </Label>
          <Button onClick={handleShowOnMap}>Pokaż na mapie</Button>{" "}
        </Tiles>
        <Tiles>
          <div style={{ textAlign: "center" }}>
            <small>
              Administratorem danych gromadzonych z wykorzystaniem formularza
              jest Eva`s Barber Shop z siedzibą w Athlone <br />
              (adres: Unit2 Irishtown, Athlone, Co. Westmeath , tel. +353 89 220
              26 22, email: evasbarbershop@gmail.com).
              <p>
                <b>
                  {" "}
                  Podane dane będą przetwarzane w celu umożliwienia korzystania
                  z funkcji Serwisu oraz co najważniejsze dokonania zakupów{" "}
                  <br />
                  zgodnie z art. 6 ust. 1 lit b. RODO lub w przypadku wyrażonej
                  zgody (zgodnie z art. 6 ust. 1 lit. a RODO) <br />
                  do celów wysyłki informacji o produktach i usługach
                  administratora lub treści marketingowych.{" "}
                </b>
              </p>
              Masz prawo dostępu do treści swoich danych, ich sprostowania,
              żądania usunięcia lub ograniczenia przetwarzania, <br />
              prawo do wniesienia sprzeciwu wobec przetwarzania, prawo do
              przenoszenia danych, prawo wniesienia skargi <br />
              do organu nadzorczego oraz prawo cofnięcia w każdym momencie
              wyrażonej zgody na przetwarzanie. Podanie <br />
              danych osobowych jest dobrowolne jednak niezbędne do założenia
              realizacji zakupów w Serwisie lub wysyłki <br />
              stosownych informacji na warunkach udzielonej zgody. Wszelkie
              informacje w zakresie przetwarzania podanych <br />w formularzu
              danych oraz posiadanych uprawnieniach osoby,której dane dotyczą
              znajdziesz w Polityce Prywatności. <br />
              Kliknij i dowiedz się więcej jeżeli informacje podane powyżej nie
              są dostatecznie jasne!
            </small>
          </div>
        </Tiles>
      </MainContainer>
    </Main>
  );
};
