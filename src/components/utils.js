export const formattingDay = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate() >= 10 ? dateObj.getDate() : `0${dateObj.getDate()}`;
  const month = dateObj.getMonth() >= 9 ? dateObj.getMonth() + 1 : `0${dateObj.getMonth() + 1}`;
  return `${dateObj.getFullYear()}-${month}-${day}`
};
