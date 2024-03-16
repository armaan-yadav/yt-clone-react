const API_KEY1 = "1fa56a74dcmsh381e708b97339c1p1f7e55jsn95aa9ff8496e";
const API_KEY2 = "c397f203admsh4aa9497baad79dbp1eb422jsn94d01d64f9ae";
const url =
  "https://youtube-v31.p.rapidapi.com/search?part=snippet%2Cid&regionCode=IN&maxResults=10&order=date";
// "https://youtube-v311.p.rapidapi.com/search/?part=snippet&maxResults=5&order=relevance&safeSearch=moderate&type=video%2Cchannel%2Cplaylist";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY2,
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
    // "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com",
  },
};

export async function getVideos(searchValue) {
  const data = await fetch(`${url}&q=${searchValue}`, options);
  const json = await data.json();
  return await json;
}