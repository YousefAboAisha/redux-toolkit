import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFoodToCustomer,
  customer,
  removeCustomer,
} from "../Features/customerSlice";

const CustomerCard = ({ id, name, food }: customer) => {
  const [foodValue, setFoodValue] = useState("");
  const dispatch = useDispatch();

  const handleAddCustomer = () => {
    if (!foodValue) return;
    dispatch(
      addFoodToCustomer({
        food: foodValue,
        id: id,
      })
    );
    setFoodValue("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((elem, index) => {
            return <p key={index}>{elem}</p>;
          })}
        </div>

        <div className="customer-food-input-container">
          <input
            value={foodValue}
            onChange={(e) => setFoodValue(e.target.value)}
          />

          <button onClick={() => handleAddCustomer()}>Add</button>
        </div>
      </div>
      <span
        onClick={() => dispatch(removeCustomer(id))}
        style={{ color: "red" }}
      >
        remove
      </span>
    </div>
  );
};

export default CustomerCard;
