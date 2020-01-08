export const formatDate = date => {
  const dateObject = new Date(date);
  const month = dateObject.getMonth;
  const year = dateObject.getFullYear;
  // eslint-disable-next-line prettier/prettier
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[month]} year`;
};
