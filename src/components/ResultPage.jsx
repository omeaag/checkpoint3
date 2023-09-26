function ResultPage() {
  const filteredCars = JSON.parse(localStorage.getItem("filteredCars")) || [];

  return (
    <div>
      <h1>Filtered Cars</h1>
      {filteredCars.map((car, i) => (
        <div key={i}>
          <p>Modal: {car.modal}</p>
          <p>Year: {car.year}</p>
          <p>Miles: {car.miles}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default ResultPage;
