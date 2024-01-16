export const validateLogin = (values) => {
  const errors = {};
  const { username, password } = values;

  if (!username) {
    errors.username = 'Required';
  } else if (username.length < 2) {
    errors.username = 'Must be at least 2 characters.';
  } else if (username.length > 15) {
    errors.username = 'Must be 15 characters or less.';
  }

  if (!password) {
    errors.password = 'Required';
  } else if (password.length < 6) {
    errors.password = 'Must be at least 6 characters.';
  } else if (!/[!@#%&]/.test(password)) {
    errors.password = 'Must include at least one special character.';
  }

  return errors;
};
