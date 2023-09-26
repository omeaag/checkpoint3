import { useState } from "react";

function InputPage() {
  let carsLocalStorage = JSON.parse(localStorage.getItem("cars")) || [];
  const [allCars, setAllCars] = useState([]);
  const [allInputsValue, setAllInputsValue] = useState({
    modal: "",
    year: "",
    miles: "",
  });
  const currentValue = (e) => {
    setAllInputsValue({ ...allInputsValue, [e.target.name]: e.target.value });
  };

  const routeChange = () => {
    window.location.href = "/filter";
  };

  const addCarInfo = () => {
    alert("this car added in list");
    if (allInputsValue !== "") {
      const currentCars = [...allCars, allInputsValue];
      setAllCars(currentCars);
      carsLocalStorage = [...currentCars];
      localStorage.setItem("cars", JSON.stringify(carsLocalStorage));
      setAllInputsValue({
        modal: "",
        year: 0,
        miles: 0,
      });
    }
  };

  return (
    <div>
      <h1>Enter Your Info</h1>
      <input
        id="modal"
        name="modal"
        type="text"
        placeholder="modal"
        value={allInputsValue.modal}
        onChange={currentValue}
      />
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
      <button onClick={addCarInfo}>Add Car</button> <br />
      <button onClick={routeChange}>Filter Page</button>
    </div>
  );
}

export default InputPage;
