export const validateLogin = (values) => {
  const errors = {};

  if (values.username.length < 2) {
    errors.username = 'Must be at least 2 characters.';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less.';
  }

  if (values.password.length < 2) {
    errors.password = 'Must be at least 2 characters.';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less.';
  }

  return errors;
};
