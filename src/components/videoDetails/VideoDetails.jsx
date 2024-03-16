import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { getVideoComments, getVideoDetails } from "../../utils/api";
import ReactPlayer from "react-player";
import { convertViews, timeDifferenceFromCurrent } from "../../utils/temp";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoAuthor from "./VideoAuthor";
import VideoComments from "./VideoCommentsContainer";

const VideoDetails = () => {
  const { id } = useParams();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoDetails, setVideoDetails] = useState({
    author: {
      avatar: [
        {
          height: 48,
          url: "https://yt3.ggpht.com/e2yeY5tjVtAFnXlHwR2XymN5hjRDPsyntVlGAtaRyCUeMZbxA7sUJvKzFg27I6SR0vJiG0lH=s48-c-k-c0x00ffffff-no-rj",
          width: 48,
        },
        {
          height: 88,
          url: "https://yt3.ggpht.com/e2yeY5tjVtAFnXlHwR2XymN5hjRDPsyntVlGAtaRyCUeMZbxA7sUJvKzFg27I6SR0vJiG0lH=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
        },
        {
          height: 176,
          url: "https://yt3.ggpht.com/e2yeY5tjVtAFnXlHwR2XymN5hjRDPsyntVlGAtaRyCUeMZbxA7sUJvKzFg27I6SR0vJiG0lH=s176-c-k-c0x00ffffff-no-rj",
          width: 176,
        },
      ],
      badges: [
        {
          text: "Verified",
          type: "VERIFIED_CHANNEL",
        },
      ],
      canonicalBaseUrl: "/@AforAdley",
      channelId: "UCBJuxfqZuiibvcwSc8ViGsQ",
      stats: {
        subscribers: 6790000,
        subscribersText: "6.79M subscribers",
      },
      title: "A for Adley - Learning & Fun",
    },
    captions: [
      {
        language: {
          code: "en",
          name: "English (auto-generated)",
        },
        url: "https://www.youtube.com/api/timedtext?v=chhXKl0pGTo&ei=kkX1ZbirJKyv_9EP-e-qkAw&caps=asr&opi=112496729&xoaf=5&hl=en&ip=0.0.0.0&ipbits=0&expire=1710598146&sparams=ip,ipbits,expire,v,ei,caps,opi,xoaf&signature=171C60E93C2756F85F5C8B051A94B7630825A9A0.66E7160767C30ED2CF91BB1D6F01E1C7F6B3F65B&key=yt8&kind=asr&lang=en",
      },
    ],
    cards: [null],
    category: "Entertainment",
    chapters: [],
    description:
      "THIS is the year we CATCH THE LEPRECHAUN 🍀🌈\n\nLET'S BE FRIENDS -- https://goo.gl/a7ctjJ\n\nHEY EVERYBODY!! It's almost St. Patrick's Day and you know what that means!! Those little leprechauns are gonna be coming around looking to steal some gold, so every year we make traps to try to catch them! Every year we get so close to catching him but he always seems to get away, but NOT this year! We made a whole bunch of traps to catch him! My trap is a box with a secret hole on top, I put some net over the hole so it looks like it's safe to walk on, but when he steps on the net he will fall through and get trapped in the box! I even put a rainbow on top with a pot of gold hanging above the hole to trick him! Leprechauns are really small though, so  ihad to build a ladder with popsicle sticks so he could climb up to the top of the box. Niko made a trap too, his is more of a \"trap door\" type of trap. The door opens one way so the leprechaun can get into the box, but they he cant get out once he's inside! He also made another trap that will hang from the ceiling, then we'll put some gold underneath it, when the leprechaun comes to take the gold, the trap will fall from above and lock him inside! Navey was also helping us make our traps, but she mostly just helped with the decorations! We wanted to give everybody LOTS of trap ideas, so we decided to watch some of our old leprechaun trap videos too! Good luck catching a leprechaun this year!!\n\nmy last video - MYSTERY PARTY and PiZZA!? Adley Niko n Navey choose Surprise Parties! playing games with mom & dad\nhttps://www.youtube.com/watch?v=xUFlQmu9ha0&t=1256s\n\nmy dad's last video - DOGS FiRST ViSiT to the HOUSE!! Olive & Koopa backyard tour Adley & Niko play Rainbow Ghosts on UEFN\nhttps://www.youtube.com/watch?v=vR9kcXvELus\n\nwatch the latest G for Gaming - FARM FAMiLY with PUPPY DOGS!! Adley and Dad moving houses for a Cabin house, Pet Horse, & Farming\nhttps://www.youtube.com/watch?v=5dmJW2X9_0U\n\nA for Adley Shorts - https://www.youtube.com/@AforAdleyShorts\nBest Day Ever Shorts - https://www.youtube.com/@BestDayEverShorts\nG for Gaming - https://www.youtube.com/@GforGaming\nSpacestation Animation - https://www.youtube.com/@SpacestationAnimation\n\n\nBye vlog *pshhhhh*",
    endScreen: {
      items: [
        {
          channel: {
            avatar: [
              {
                height: 250,
                url: "https://yt3.ggpht.com/e2yeY5tjVtAFnXlHwR2XymN5hjRDPsyntVlGAtaRyCUeMZbxA7sUJvKzFg27I6SR0vJiG0lH=s250-c-k-c0x00ffffff-no-rj",
                width: 250,
              },
              {
                height: 400,
                url: "https://yt3.ggpht.com/e2yeY5tjVtAFnXlHwR2XymN5hjRDPsyntVlGAtaRyCUeMZbxA7sUJvKzFg27I6SR0vJiG0lH=s400-c-k-c0x00ffffff-no-rj",
                width: 400,
              },
            ],
            channelId: "UCBJuxfqZuiibvcwSc8ViGsQ",
            description:
              "mini professional fun haver  :)\n\ni make my videos and dad does my emails -- Adley@Spacestation.com",
            title: "A for Adley - Learning & Fun",
          },
          type: "channel",
        },
        {
          type: "video",
          video: {
            lengthSeconds: 1869,
            stats: {
              views: 606681,
            },
            thumbnails: [
              {
                height: 94,
                url: "https://i.ytimg.com/vi/xUFlQmu9ha0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCghTPucpQGfIOU9oF0D5gXWSi8qw",
                width: 168,
              },
              {
                height: 110,
                url: "https://i.ytimg.com/vi/xUFlQmu9ha0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBCq1U9s6i25uIkSYsuERSaYp_Esw",
                width: 196,
              },
              {
                height: 138,
                url: "https://i.ytimg.com/vi/xUFlQmu9ha0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkwR0hdUclYjyY2qRiqxbZD5GYYw",
                width: 246,
              },
              {
                height: 188,
                url: "https://i.ytimg.com/vi/xUFlQmu9ha0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf0DPCmb-5GK9o4MxcuCef7czWpw",
                width: 336,
              },
              {
                height: 1080,
                url: "https://i.ytimg.com/vi_webp/xUFlQmu9ha0/maxresdefault.webp",
                width: 1920,
              },
            ],
            title:
              "MYSTERY PARTY and PiZZA!?  Adley Niko n Navey choose Surprise Parties! playing games with mom & dad",
            videoId: "xUFlQmu9ha0",
          },
        },
      ],
    },
    isLiveContent: false,
    isLiveNow: false,
    keywords: [
      "adley",
      "shonduras",
      "hidden",
      "presents",
      "hide n seek",
      "leprechaun trap",
      "leprechaun",
      "box fort",
      "family",
      "st patricks day",
      "saint patricks day",
      "saint patrick",
      "fun",
      "gold",
      "treasure",
      "family fun",
      "gold leprechaun slime!! 🍀⭐",
      "how to make",
      "hide and seek",
      "hide",
      "easter eggs",
      "st pattys day",
      "gold trap",
      "kids leprechaun trap",
      "hidden gold",
      "slide trap",
      "sticky trap",
      "we caught a leprechaun",
      "navey",
      "niko",
      "traps",
      "diy",
      "crafts",
      "family arts and crafts",
      "Adley & Niko Learn to Tie-Dye 🎨 Making Rainbow clothes at Dads work",
      "art",
    ],
    lengthSeconds: 6067,
    musics: [],
    publishedDate: "2024-03-15T07:59:31-07:00",
    stats: {
      comments: 557,
      likes: 2169,
      views: 214075,
    },
    superTitle: {
      items: [],
    },
    thumbnails: [
      {
        height: 94,
        url: "https://i.ytimg.com/vi/chhXKl0pGTo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAS8UhQd72FIaRH8i-OsvTJF9uuOA",
        width: 168,
      },
      {
        height: 110,
        url: "https://i.ytimg.com/vi/chhXKl0pGTo/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBmhSSLYDwroTi7gfT7MuqsDZ05Xg",
        width: 196,
      },
      {
        height: 138,
        url: "https://i.ytimg.com/vi/chhXKl0pGTo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA02kCVixfQ7d96zpQSd78Z0XNj1w",
        width: 246,
      },
      {
        height: 188,
        url: "https://i.ytimg.com/vi/chhXKl0pGTo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC06xaWkVC7SwRadWRoGh2L4QdRUw",
        width: 336,
      },
      {
        height: 1080,
        url: "https://i.ytimg.com/vi_webp/chhXKl0pGTo/maxresdefault.webp",
        width: 1920,
      },
    ],
    title:
      "HOW TO CATCH A LEPRECHAUN!!  Best Trap ideas and making new homemade traps with Adley Niko & Navey",
    videoId: "chhXKl0pGTo",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const divRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      console.log("first");
      if (
        divRef.current.scrollTop + divRef.current.clientHeight >=
          divRef.current.scrollHeight &&
        !isLoading &&
        !isEndReached
      ) {
        console.log("first"); // Fetch more data when the bottom is reached
      }
    };
    divRef.current.addEventListener("scroll", handleScroll);

    return () => {
      divRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   // setIsLoading(true);
  //   // getVideoDetails(id).then((response) => {
  //   //   setVideoDetails(response);
  //   // });
  //   // setIsLoading(false);
  //   setTimeout(() => {
  //     setIsMuted(false);
  //     setIsPlaying(true);
  //   }, 2000);
  //   // getVideoComments("dP75Khfy4s4").then((e) => console.log(e));
  // }, []);

  return (
    <div
      className="w-full bg-black text-white px-10 min-h-screen pt-7"
      ref={divRef}
    >
      <div className="main-video  w-[60%] h-full">
        <VideoPlayer videoId={videoDetails.videoId} isPLaying={isPlaying} />
        <h1 className="text-xl font-bold my-2">{videoDetails.title}</h1>
        <div>
          <VideoAuthor videoDetails={videoDetails} />
        </div>
        <VideoDescription
          setShowFullDesc={setShowFullDesc}
          showFullDesc={showFullDesc}
          videoDetails={videoDetails}
        />
        <VideoComments videoId={videoDetails.videoId} />
      </div>
      <div className="suggested-videos"></div>
    </div>
  );
};

export default VideoDetails;
