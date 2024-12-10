import { useState } from "react";
const DynamicForm = () => {
  //states
  const [formFields, setFormFields] = useState([{ id: 1, value: "" }]);

  //add field
  const addField = () => {
    setFormFields((prevFormFields) => [
      ...formFields,
      { id: prevFormFields.length + 1, value: "" },
    ]);
  };

  //remove field
  const removeField = (id) => {
    setFormFields((prevFormFields) =>
      prevFormFields.filter((field) => field.id !== id)
    );
  };

  //handle change
  const handleChange = (id, value) => {
    setFormFields((prevFormFields) =>
      prevFormFields.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = formFields.map((field) => field.value);
    console.log("Collected Data: ", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Dynamic Form</h2>
      {formFields.map((field) => (
        <div key={field.id} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder={`Field ${field.id}`}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          <button
            type="button"
            onClick={() => removeField(field.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <div>
        <button
          type="button"
          onClick={addField}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Add Field
        </button>
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default DynamicForm;
