const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001; // Możesz użyć dowolnego wolnego portu

app.use(cors());
app.use(bodyParser.json());

// Połączenie z bazą danych
mongoose.connect("mongodb://localhost:27017/haircutReservation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Model danych
const Reservation = mongoose.model("Reservation", {
  name: String,
  phoneNumber: String,
  email: String,
  selectedService: String,
  selectedStylist: String,
  date: String,
  time: String,
  additionalNotes: String,
});

// Obsługa żądania POST od formularza
app.post("/submitReservation", async (req, res) => {
  const {
    name,
    phoneNumber,
    email,
    selectedService,
    selectedStylist,
    date,
    time,
    additionalNotes,
  } = req.body;

  try {
    const reservation = new Reservation({
      name,
      phoneNumber,
      email,
      selectedService,
      selectedStylist,
      date,
      time,
      additionalNotes,
    });

    await reservation.save();
    res.status(200).json({ message: "Dane zapisane do bazy danych!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Błąd podczas zapisywania danych do bazy" });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
