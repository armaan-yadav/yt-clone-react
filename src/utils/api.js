const API_KEY1 = "c561809dddmshfd308f598fba912p1c06d4jsnc55a6c9c1ea6";

const fetch_url =
  "https://youtube-v31.p.rapidapi.com/search?part=snippet%2Cid&regionCode=IN&maxResults=10&order=date";
// "https://youtube-v311.p.rapidapi.com/search/?part=snippet&maxResults=5&order=relevance&safeSearch=moderate&type=video%2Cchannel%2Cplaylist";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY1,
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    // "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
  },
};

export async function getVideos(searchValue) {
  const data = await fetch(`${fetch_url}/&q=${searchValue}`, options);
  const json = await data.json();
  return json;
}
export async function getNextVideos(searchValue, cursor) {
  const data = await fetch(
    `${fetch_url}/&q=${searchValue}&cursor=${cursor}`,
    options
  );
  const json = await data.json();
  return json;
}

export async function getVideoDetails(videoId) {
  const data = await fetch(
    `https://youtube-data8.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`,
    options
  );
  const json = await data.json();
  return json;
}

export async function getVideoComments(videoId, cursor) {
  const data = await fetch(
    `https://youtube-data8.p.rapidapi.com/video/comments/?id=${videoId}&hl=en&gl=US&${
      cursor && `cursor=${cursor}`
    }`,
    options
  );
  const json = await data.json();
  return json;
}

export async function getSuggestedVideos(videoId) {
  const data = await fetch(
    `https://youtube-data8.p.rapidapi.com/video/related-contents/?id=${videoId}&hl=en&gl=US`,
    options
  );
  const json = await data.json();
  return json;
}
export async function getSearchSuggestions(searchValue) {
  const data = await fetch(
    `https://youtube-data8.p.rapidapi.com/auto-complete/?q=${searchValue}&hl=en&gl=US`,
    options
  );
  const json = await data.json();
  return json;
}
