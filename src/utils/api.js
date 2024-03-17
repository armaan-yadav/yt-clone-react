const API_KEY1 = "1fa56a74dcmsh381e708b97339c1p1f7e55jsn95aa9ff8496e";
const API_KEY2 = "c397f203admsh4aa9497baad79dbp1eb422jsn94d01d64f9ae";
const API_KEY3 = "eb49126ad5msh01e53f5b7877815p1992fcjsncc1106d75470";
const API_KEY4 = "76464b3147msh21a5d8465a4150dp11b40bjsna2c7f25928a3";
const API_KEY5 = "1fa56a74dcmsh381e708b97339c1p1f7e55jsn95aa9ff8496e";
const fetch_url =
  "https://youtube-v31.p.rapidapi.com/search?part=snippet%2Cid&regionCode=IN&maxResults=10&order=date";
// "https://youtube-v311.p.rapidapi.com/search/?part=snippet&maxResults=5&order=relevance&safeSearch=moderate&type=video%2Cchannel%2Cplaylist";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY5,
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    // "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
  },
};

export async function setVideos(searchValue) {
  // const data = await fetch(`${fetch_url}/&q=${searchValue}`, options);
  // const json = await data.json();
  // return json;
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
    `https://youtube-v3-lite.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1fa56a74dcmsh381e708b97339c1p1f7e55jsn95aa9ff8496e",
        "X-RapidAPI-Host": "youtube-v3-lite.p.rapidapi.com",
      },
    }
  );
  const json = await data.json();
  return json;
}
