export const isValidDate = (month: number, year: number) =>
  monthIsValid(month) && cardExpired(month, year);

export const monthIsValid = (value: number) => value > 0 && value < 13;

// export const fieldIsEmpty = value => value === '' || value.includes('_');

export const cardExpired = (month: number, year: number) => {
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear) {
    return true;
  }

  if (year === currentYear) {
    return currentMonth > month;
  }

  return false;
};
