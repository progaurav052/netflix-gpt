const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Invalid email!";
  }
  if (!isPasswordValid) {
    return "Password invalid!"; // atleast 1 caps , 1 number ,1 special char
  } else {
    return null;
  }
};
export default checkValidData;
