import "../Component-Styles/login.css";
import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import { useContext } from "react";
import { CartItemsContext } from "../Context/CartItemsContext";

export default function Login() {
  let { user, setUser } = useContext(CartItemsContext);
  console.log(user);

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  const { error, isLoading, data: database } = useFetch(
    `https://fakestoreapi.com/users`
  );

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database?.find((user) => user.username === uname.value);
    setUser(userData);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="logIn">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Welcome, {user?.name.firstname}</div> : renderForm}
      </div>
    </div>
  );
}
