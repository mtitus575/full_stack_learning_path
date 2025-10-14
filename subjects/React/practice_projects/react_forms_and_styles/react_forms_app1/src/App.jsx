import { useState } from "react";
import "./styles/App.css";
import FoodOrderForm from "./components/FoodOrderForm";
import "./styles/App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(
      `Your order for ${order} has been placed! \n Show receipt on collection. \n See you soon!`
    );

    //Clear form after submission:
    setName("");
    setPhone("");
    setAddress("");
    setOrder("");
  }

  return (
    <div className="container">
      <section>
        <h1>Saucy Tango</h1>
        <p>Place your order below:</p>
      </section>

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
    </div>
  );
}

export default App;
