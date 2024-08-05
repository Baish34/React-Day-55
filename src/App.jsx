import React, { useState } from "react";
import "./App.css";

const FavSport = () => {
  const [favSports, setFavSports] = useState([]);

  const handleSportCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFavSports((prevSports) => [...prevSports, value]);
    } else {
      setFavSports((prevSports) =>
        prevSports.filter((sport) => sport !== value),
      );
    }
  };

  const displaySelectedSports = () => {
    if (favSports.length === 0) {
      return "";
    } else {
      return `Selected sports: ${favSports.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favorite sports:</label>
      <br />
      <input
        type="checkbox"
        value="Football"
        onChange={handleSportCheckbox}
      />{" "}
      Football
      <br />
      <input
        type="checkbox"
        value="Basketball"
        onChange={handleSportCheckbox}
      />{" "}
      Basketball
      <br />
      <input
        type="checkbox"
        value="Tennis"
        onChange={handleSportCheckbox}
      />{" "}
      Tennis
      <br />
      <input
        type="checkbox"
        value="Swimming"
        onChange={handleSportCheckbox}
      />{" "}
      Swimming
      <br />
      <p>{displaySelectedSports()}</p>
    </div>
  );
};

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState([]);
  const handleColorCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedColor((preColor) => [...preColor, value]);
    } else {
      setSelectedColor((preColor) =>
        preColor.filter((color) => color != value),
      );
    }
  };

  const displaySelectedColors = () => {
    if (selectedColor.length === 0) {
      return "";
    } else {
      return `Selected colors: ${selectedColor.join(", ")}`;
    }
  };

  return (
    <div>
      <label>Choose your favourite colors:</label> <br />
      <input
        type="checkbox"
        value="Red"
        onChange={handleColorCheckbox}
      /> Red <br />
      <input
        type="checkbox"
        value="Blue"
        onChange={handleColorCheckbox}
      /> Blue <br />
      <input
        type="checkbox"
        value="Green"
        onChange={handleColorCheckbox}
      />{" "}
      Green <br />
      <input
        type="checkbox"
        value="Yellow"
        onChange={handleColorCheckbox}
      />{" "}
      Yellow <br />
      <p>{displaySelectedColors()}</p>
    </div>
  );
};

const MusicalInstrument = () => {
  const [musicalInstrument, setmusicalInstrument] = useState([]);
  const handleIntrumentCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setmusicalInstrument((preInstument) => [...preInstument, value]);
    } else {
      setmusicalInstrument((preInstrument) =>
        preInstrument.filter((instrument) => instrument != value),
      );
    }
  };
  return (
    <div>
      <label>Choose your musical instruments:</label> <br />
      <input
        type="checkbox"
        value="Guitar"
        onChange={handleIntrumentCheckbox}
      />{" "}
      Guitar <br />
      <input
        type="checkbox"
        value="Piano"
        onChange={handleIntrumentCheckbox}
      />{" "}
      Piano <br />
      <input
        type="checkbox"
        value="Drums"
        onChange={handleIntrumentCheckbox}
      />{" "}
      Drums <br />
      <p>Selected instruments: {musicalInstrument.join(", ")}</p>
    </div>
  );
};

const FavAnimal = () => {
  const [selectedAnimal, setSelectedAnimal] = useState([]);
  const handleAnimalCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedAnimal((preAnimal) => [...preAnimal, value]);
    } else {
      setSelectedAnimal((preAnimal) =>
        preAnimal.filter((animal) => animal != value),
      );
    }
  };
  return (
    <div>
      <label>Choose your favorite animals:</label> <br />
      <input
        type="checkbox"
        value="Dog"
        onChange={handleAnimalCheckbox}
      />{" "}
      Dog <br />
      <input
        type="checkbox"
        value="Cat"
        onChange={handleAnimalCheckbox}
      />{" "}
      Cat <br />
      <input
        type="checkbox"
        value="Rabbit"
        onChange={handleAnimalCheckbox}
      />{" "}
      Rabbit <br />
      <p>Selected animals: {selectedAnimal.join(", ")}</p>
    </div>
  );
};

const FavCar = () => {
  const [selectedCar, setSelectedCar] = useState([]);
  const handleCarCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCar((preCar) => [...preCar, value]);
    } else {
      setSelectedCar((preCar) => preCar.filter((car) => car != value));
    }
  };
  return (
    <div>
      <label>Choose your favorite cars:</label> <br />
      <input
        type="checkbox"
        value="Mercedes"
        onChange={handleCarCheckbox}
      />{" "}
      Mercedes <br />
      <input
        type="checkbox"
        value="BMW"
        onChange={handleCarCheckbox}
      />{" "}
      BMW <br />
      <input
        type="checkbox"
        value="Audi"
        onChange={handleCarCheckbox}
      />{" "}
      Audi <br />
      <p>Selected cars: {selectedCar.join(", ")}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FavSport />
      <SelectColor />
      <MusicalInstrument />
      <FavAnimal />
      <FavCar />
    </main>
  );
}
