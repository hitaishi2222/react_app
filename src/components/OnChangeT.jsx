import { useState } from "react";

const OnChangeT = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleshippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input
        className="border border-black"
        value={name}
        type="text"
        onChange={handleNameChange}
      />
      <p>Name: {name}</p>
      <input
        className="border border-black"
        value={quantity}
        type="number"
        onChange={handleQuantityChange}
      />
      <p>Quantity: {quantity}</p>
      <textarea
        className="border border-black"
        value={comment}
        placeholder="Enter delivery instructions"
        onChange={handleCommentChange}
      />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick up"}
          onChange={handleshippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleshippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
};

export default OnChangeT;
