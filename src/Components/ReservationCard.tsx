import { useDispatch } from "react-redux";
import { addCustomer } from "../Features/customerSlice";
import { removeReservation } from "../Features/reservationSlice";
import { v4 as uuid } from "uuid";

type CustomerCardType = {
  name: string;
  id: number;
};

const ReservationCard = ({ name, id }: CustomerCardType) => {
  const dispatch = useDispatch();

  return (
    <div className="reservation-card-container">
      <h5>{name}</h5>
      <span
        onClick={() => {
          dispatch(removeReservation(id));
          dispatch(
            addCustomer({
              // Auto generated id of string type
              id: uuid(),
              name: name,
              food: [],
            })
          );
        }}
        style={{ color: "red" }}
      >
        remove
      </span>
    </div>
  );
};

export default ReservationCard;
