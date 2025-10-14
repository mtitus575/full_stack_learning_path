import styles from '../styles/modules/FoodOrderForm.module.css'

function FoodOrderForm(props) {
  const { name, setName } = props;
  const { phone, setPhone } = props;
  const { address, setAddress } = props;
  const { order, setOrder } = props;
  const { submit } = props;

  return (
    <form action="#" onSubmit={submit} className={styles.form}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        required
        onChange={({ target }) => setName(target.value)}
        value={name}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        required
        onChange={({ target }) => setPhone(target.value)}
        value={phone}
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        required
        onChange={({ target }) => setAddress(target.value)}
        value={address}
      />

      <label htmlFor="order">Order:</label>
      <input
        type="text"
        id="order"
        required
        onChange={({ target }) => setOrder(target.value)}
        value={order}
      />

      <button>Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;
