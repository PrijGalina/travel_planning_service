export function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomDictionaryElement(dictionary) {
  const keys = Object.keys(dictionary);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];
  return dictionary[randomKey];
}

export function generateRandomId() {
  const characters = 'abcdef0123456789';
  let randomString = '';

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      randomString += '-';
    } else {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
  }

  return randomString;
}

export function generateRandomDateTimeRange() {
  //random start (-3 years — +1)
  const threeYearsAgo = new Date(Date.now() - 3 * 365 * 24 * 60 * 60 * 1000);
  const oneYearLater = new Date(Date.now() + 1 * 365 * 24 * 60 * 60 * 1000);
  const start = new Date(threeYearsAgo.getTime() + Math.floor(Math.random() * (oneYearLater.getTime() - threeYearsAgo.getTime())));

  //random duration (10 min — 7 days (in milliseconds)
  const minDuration = 10 * 60 * 1000;
  const maxDuration = 7 * 24 * 60 * 60 * 1000;
  const duration = Math.floor(Math.random() * (maxDuration - minDuration)) + minDuration;

  //end time
  const end = new Date(start.getTime() + duration);

  //formatting
  const startISOString = start.toISOString();
  const endISOString = end.toISOString();

  return [startISOString, endISOString];
}

export function getDateTimeData(count) {
  return Array.from({ length: count }, generateRandomDateTimeRange);
}

export function generateRandomPrice() {
  const minPrice = 20;
  const maxPrice = 1100;
  const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
  return price;
}

export function formatDateString(inputDateString) {
  const inputDate = new Date(inputDateString);
  //"MAR 18"
  const optionsDate1 = { month: 'short', day: 'numeric' };
  const formattedDate1 = inputDate.toLocaleDateString('en-US', optionsDate1).toUpperCase();
  //"2019-03-18"
  const optionsDate2 = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate2Parts = inputDate.toLocaleDateString('en-US', optionsDate2).split('/');
  const formattedDate2 = `${formattedDate2Parts[2]}-${formattedDate2Parts[0]}-${formattedDate2Parts[1]}`;
  //"10:30"
  const optionsTime1 = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedTime1 = inputDate.toLocaleTimeString('en-US', optionsTime1);
  //"2019-03-18T11:00"
  const optionsTime2 = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
  let formattedTime2Parts = inputDate.toLocaleDateString('en-US', optionsTime2).split('/');
  formattedTime2Parts = [formattedTime2Parts[0], formattedTime2Parts[1], ...formattedTime2Parts[2].split(',')];
  const formattedTime2 = `${formattedTime2Parts[2]}-${formattedTime2Parts[0]}-${formattedTime2Parts[1]}T${formattedTime2Parts[3].replace(' ', '')}`;

  return [formattedDate1, formattedDate2, formattedTime1, formattedTime2];
}

export function getDuration(dateFrom, dateTo) {
  const date1 = new Date(dateFrom);
  const date2 = new Date(dateTo);
  const differenceInMillis = date2 - date1;
  const differenceInSeconds = differenceInMillis / 1000;
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} M`;
  } else if (differenceInHours < 24) {
    return `${differenceInHours}H ${differenceInMinutes - differenceInHours * 60} M`;
  } else {
    return `${differenceInDays}D ${differenceInHours - differenceInDays * 24}H ${differenceInMinutes - differenceInHours * 60}M`;
  }
}
