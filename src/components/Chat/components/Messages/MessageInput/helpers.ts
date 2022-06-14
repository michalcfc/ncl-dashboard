export const isPhoneWordDetected = (message: string) => {
  const phoneText = message;
  const pattern = /telefon/;
  return !!phoneText.match(pattern);
};

export const isWordDetected = (message: string) => {
  const pattern = ['telefon', '@', 'www', 'https', '.pl', '.com', 'facebook', 'fb', 'olx', 'booking'];
  return pattern.indexOf(message) > -1;
};

export const isEmailDetected = (message: string) => {
  const email = message;
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return pattern.test(String(email).toLowerCase());
};

export const isPhoneDetected = (message: string) => {
  const phone = message;
  const pattern = /^[\\+]?[(]?[0-9]{2,3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3,}$/im;
  return pattern.test(String(phone).toLowerCase());
};

export const isPhoneOrEmailDetected = (message: string) => {
  const isPhoneOrEmailDetected = isWordDetected(message)
  || isPhoneDetected(message)
  || isEmailDetected(message);

  return isPhoneOrEmailDetected;
};
