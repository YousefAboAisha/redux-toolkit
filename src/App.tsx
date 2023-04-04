import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./Components/CustomerCard";
import ReservationCard from "./Components/ReservationCard";
import { addReservation } from "./Features/reservationSlice";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const reservation = useSelector((state: RootState) => {
    return state.reservations.value;
  });

  const customers = useSelector((state: RootState) => {
    return state.customers.value;
  });

  const handleAddReservation = () => {
    if (!value) return;
    dispatch(addReservation(value));
    setValue("");
  };

  return (
    <div className="App">
      <div className="container">
        {/* Reservation Section */}
        <div className="reservation-container">
          {/* Reservation Card */}
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => {
                return <ReservationCard key={index} name={name} id={index} />;
              })}
            </div>
          </div>

          <div className="reservation-input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => handleAddReservation()}>Add</button>
          </div>
        </div>

        <div className="customer-food-container">
          {customers.map((elem) => {
            return (
              <CustomerCard
                key={elem.id}
                name={elem.name}
                id={elem.id}
                food={elem.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
