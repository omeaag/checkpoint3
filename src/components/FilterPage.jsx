import { useState } from "react";

function FilterPage() {
  const carsLocalStorage = localStorage.getItem("cars")
    ? JSON.parse(localStorage.getItem("cars"))
    : [];

  const [filterCars, setFilterCars] = useState([]);
  const [allInputsValue, setAllInputsValue] = useState({
    year: 0,
    miles: 0,
  });

  const currentValue = (e) => {
    setAllInputsValue({ ...allInputsValue, [e.target.name]: e.target.value });
  };

  const filterResult = () => {
    const filteredCars = carsLocalStorage.filter((car) => {
      if (Number(car.year) <= Number(allInputsValue.year)) return false;
      if (Number(car.miles) >= Number(allInputsValue.miles)) return false;

      return true;
    });

    setFilterCars(filteredCars);
    localStorage.setItem("filteredCars", JSON.stringify(filteredCars));
    window.location.href = "/result";
  };
  return (
    <div>
      <h1>Enter Your Info</h1>
      <br />
      <input
        id="year"
        name="year"
        type="number"
        value={allInputsValue.year}
        placeholder="year"
        onChange={currentValue}
      />
      <br />
      <input
        id="miles"
        name="miles"
        type="number"
        value={allInputsValue.miles}
        placeholder="miles"
        onChange={currentValue}
      />{" "}
      <br />
      <button onClick={filterResult}>Filter Result</button>
    </div>
  );
}
export default FilterPage;
