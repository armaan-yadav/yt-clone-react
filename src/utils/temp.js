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
