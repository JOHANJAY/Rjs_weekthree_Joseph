import { useState } from "react";

const Form = () => {
  //states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const { name, email, password } = formData;

  //formvalidation
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!data.password || data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  //handlechane
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);
    validateForm(updatedFormData);
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setErrors({});
      setIsFormValid(false);
    }
  };

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "50px",
      borderBottom: "2px solid #ccc",
    },
    input: {
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    error: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: "-5px",
      marginBottom: "10px",
    },
    button: {
      margin: "10px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      backgroundColor: isFormValid ? "#4caf50" : "#ccc",
      color: isFormValid ? "white" : "#666",
      cursor: isFormValid ? "pointer" : "not-allowed",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          style={styles.input}
        />
        {errors.name && <div style={styles.error}>{errors.name}</div>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          style={styles.input}
        />
        {errors.email && <div style={styles.error}>{errors.email}</div>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          style={styles.input}
        />
        {errors.password && <div style={styles.error}>{errors.password}</div>}
      </label>
      <button type="submit" style={styles.button} disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
