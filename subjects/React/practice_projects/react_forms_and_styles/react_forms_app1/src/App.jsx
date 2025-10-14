import { useState } from "react";
import "./styles/App.css";
import FoodOrderForm from "./components/FoodOrderForm";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Your order for ${order} has been placed! \n Show receipt on collection. \n See you soon!` )
  }

  return (
    <>
      <div>
        <h1>Saucy Tango</h1>
        <p>Place your order below:</p>
      </div>

      <FoodOrderForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
        order={order}
        setOrder={setOrder}
        submit={handleSubmit}
      />
    </>
  );
}

export default App;
