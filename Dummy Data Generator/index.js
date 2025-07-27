import Dummy from "./model/dummy.js";
import mongoose from "mongoose";
import express from "express";

const app = express();
const port = 8000;

const mongoURI = "mongodb://localhost:27017/backend";

async function connectDB() {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("✅ MongoDB connected via Mongoose");
  } catch (err) {
    console.error("❌ Mongoose connection error:", err);
    process.exit(1); // exit on failure
  }
}

connectDB();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
];
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "Go",
  "TypeScript",
  "Swift",
  "Rust",
];
const cities = [
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Sydney",
  "Berlin",
  "Toronto",
  "Dubai",
  "Mumbai",
  "São Paulo",
];

app.get("/", async (req, res) => {
    try {
      const data = await Dummy.find({});
      
      if (data.length > 0) {
        await Dummy.deleteMany({});
        return res.send("Data deleted");
      } else {
        for (let i = 0; i < 20; i++) {
          const name = names[getRandomInt(0, names.length - 1)];
          const salary = getRandomInt(300000, 1000000);
          const language = programmingLanguages[getRandomInt(0, programmingLanguages.length - 1)];
          const city = cities[getRandomInt(0, cities.length - 1)];
          const isManager = getRandomInt(0, 1) === 1;
  
          const dummy = new Dummy({
            name,
            salary,
            language,
            city,
            isManager
          });
  
          await dummy.save(); // or push to an array and use Dummy.insertMany()
        }
  
        return res.send(`<button><a href='dummy'>generate Data</a></button>`);

      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  app.get("/dummy", async (req, res) => {
    res.send(await Dummy.find({}))
  })

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
  
});

