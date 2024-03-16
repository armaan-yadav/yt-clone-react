export const YT_API_KEY = "AIzaSyDigJQ2UIKiIs-ZzG6I5VzSq6heKUCZkgk";

export function convertViews(numberOfViews) {
  if (numberOfViews >= 1000000) {
    return (numberOfViews / 1000000).toFixed(1) + "M";
  } else if (numberOfViews >= 1000) {
    return (numberOfViews / 1000).toFixed(1) + "K";
  } else {
    return numberOfViews?.toString();
  }
}

export function timeDifferenceFromCurrent(inputDate) {
  // Parse the input date string
  const inputDatetime = new Date(inputDate);

  // Get current UTC time
  const currentDatetime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDatetime - inputDatetime;

  // Convert time difference to seconds, minutes, hours, days, weeks, months, and years
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(daysDifference / 365);

  if (yearsDifference > 0) {
    return `${yearsDifference} years ago`;
  } else if (monthsDifference > 0) {
    return `${monthsDifference} months ago`;
  } else if (weeksDifference > 0) {
    return `${weeksDifference} weeks ago`;
  } else if (daysDifference > 0) {
    return `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    return `${hoursDifference} hours ago`;
  } else if (minutesDifference > 0) {
    return `${minutesDifference} minutes ago`;
  } else {
    return `Just now`;
  }
}
