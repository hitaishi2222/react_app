import { useState } from "react";

const UpdateState = () => {
  const [car, setCar] = useState({ year: 2024, make: "Tesla", model: "Y" });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}{" "}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        className="border border-black"
      />
      <br />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        className="border border-black"
      />
      <br />
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        className="border border-black"
      />
      <br />
    </div>
  );
};

export default UpdateState;
