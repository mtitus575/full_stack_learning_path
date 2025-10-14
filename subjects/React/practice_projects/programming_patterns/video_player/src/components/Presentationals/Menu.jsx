import styles from '../../styles/Menu.module.css';

function Menu({ onSelect }) {
  //Function to handle the click selection with some validation:
  function handleClickChange({ target }) {
    if (target.type === "radio") {
      const item = target.value;
      onSelect(item);
    }
  }

  return (
    <div className={styles.box}>
      <h3>Select a video:</h3>
      <form onClick={handleClickChange}>
        <input name="video" value="fast" type="radio" id="fast" />
        <label htmlFor="fast">Fast</label>
        <input name="video" value="slow" type="radio" id="slow" />
        <label htmlFor="slow">Slow</label>
        <input name="video" value="cute" type="radio" id="cute" />
        <label htmlFor="cute">Cute</label>
        <input name="video" value="eek" type="radio" id="eek" />
        <label htmlFor="eek">Eek</label>
      </form>
    </div>
  );
}

export default Menu;
