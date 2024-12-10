import { useState } from "react";

const CheckboxGroup = () => {
  const [checked, setChecked] = useState([]);

  //handlecheck
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setChecked((prev) => [...prev, name]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== name));
    }
  };

  console.log(checked);

  //styles
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
      padding: "10px",
      borderTop: "2px solid #ccc",
      borderBottom: "2px solid #ccc",
    },
    input: {
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
  };

  return (
    <form style={styles.form}>
      <label>
        <input type="checkbox" style={styles.input} name="Fresh Fruit" onChange={handleCheck} />
        Fresh Fruit
      </label>
      <label>
        <input type="checkbox" style={styles.input} name="Vegetables" onChange={handleCheck} />
        Vegetables
      </label>
      <label>
        <input type="checkbox" style={styles.input} name="Grain" onChange={handleCheck} />
        Grain
      </label>
      <label>
        <input type="checkbox" style={styles.input} name="Groceries" onChange={handleCheck} />
        Groceries
      </label>
      <label>
        <input type="checkbox" style={styles.input} name="Beverages" onChange={handleCheck} />
        Beverages
      </label>
      <label>
        <input type="checkbox" style={styles.input} name="Edible Oil" onChange={handleCheck} />
        Edible Oil
      </label>
    </form>
  );
};

export default CheckboxGroup;
