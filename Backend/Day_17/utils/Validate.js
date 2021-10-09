const emailValidate = (email) => {
  const re =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

// Minimum eight characters, at least one letter and one number:
const passwordValidate = (password) => {
  var re = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
  return re.test(password);
};

module.exports = {
  emailValidate,
  passwordValidate,
};
