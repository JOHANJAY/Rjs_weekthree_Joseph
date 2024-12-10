import { useState } from "react";
const SelectDropDown = () => {
  const options = [1, 2, 3];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  //handleselect
  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };
  
  console.log(selectedOption);

  const styles = {
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    },
    select: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
  };

  return (
    <label style={styles.label}>
      Select an option:
      <select onChange={handleSelect} style={styles.select}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </label>
  );
};
export default SelectDropDown;
