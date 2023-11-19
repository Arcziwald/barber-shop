const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

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
  lockTime: { type: Date, default: null }, // Dodane pole lockTime
});

// Lista zarezerwowanych terminów
let busyTimes = [];

// Obsługa żądania POST od formularza
app.post("/submitReservation", async (req, res) => {
  const {
    name,
    phoneNumber,
    email,
    selectedService,
    selectedOderService,
    date,
    time,
    additionalNotes,
  } = req.body;

  try {
    const existingReservation = await Reservation.findOne({
      date,
      time,
      lockTime: { $ne: null }, // Sprawdzamy, czy termin jest zablokowany
    });

    if (existingReservation) {
      res.status(409).json({ error: "Termin jest już zajęty. Wybierz inny termin." });
    } else {
      const reservation = new Reservation({
        name,
        phoneNumber,
        email,
        selectedService,
        selectedOderService,
        date,
        time,
        additionalNotes,
        lockTime: new Date(), // Ustawiamy czas blokady
      });

      await reservation.save();
      res.status(200).json({ message: "Dane zapisane do bazy danych!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Błąd podczas zapisywania danych do bazy" });
  }
});
app.get("/", (req, res) => {
  res.send("Serwer działa poprawnie");
});
// Pobierz zarezerwowane terminy
app.get("/getReservedTimes", (req, res) => {
  res.status(200).json({ reservedTimes: busyTimes });
});

app.get("/getLockedTimes", async (req, res) => {
  try {
    const lockedTimes = await Reservation.find({
      lockTime: { $ne: null },
    }).select("date time -_id");

    const formattedLockedTimes = lockedTimes.map((lock) => `${lock.date} ${lock.time}`);
    res.status(200).json({ lockedTimes: formattedLockedTimes });
  } catch (error) {
    console.error("Błąd pobierania zablokowanych terminów:", error);
    res.status(500).json({ error: "Błąd podczas pobierania zablokowanych terminów" });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
