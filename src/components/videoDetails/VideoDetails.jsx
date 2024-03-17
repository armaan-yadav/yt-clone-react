import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { getVideoDetails } from "../../utils/api";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoAuthor from "./VideoAuthor";
import VideoComments from "./videoComments/VideoCommentsContainer";
import VideoSuggestions from "./videoSuggestions/VideoSuggestionsContainer";
import VideoSuggestionsContainer from "./videoSuggestions/VideoSuggestionsContainer";

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
          url: "https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s48-c-k-c0x00ffffff-no-rj",
          width: 48,
        },
        {
          height: 88,
          url: "https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
        },
        {
          height: 176,
          url: "https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s176-c-k-c0x00ffffff-no-rj",
          width: 176,
        },
      ],
      badges: [
        {
          text: "Verified",
          type: "VERIFIED_CHANNEL",
        },
      ],
      canonicalBaseUrl: "/@programmingwithmosh",
      channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
      stats: {
        subscribers: 3810000,
        subscribersText: "3.81M subscribers",
      },
      title: "Programming with Mosh",
    },
    captions: [
      {
        language: {
          code: "en",
          name: "English",
        },
        url: "https://www.youtube.com/api/timedtext?v=W6NZfCO5SIk&ei=vMr2ZZfNJZeP_9EP95O78Ak&caps=asr&opi=112496729&xoaf=5&hl=en&ip=0.0.0.0&ipbits=0&expire=1710697772&sparams=ip,ipbits,expire,v,ei,caps,opi,xoaf&signature=9621DA1988B602420F4CD85A4E8DEC68FC1C2D72.4328FCC4BE3F8FBD8293A43354AEDF80E8D21309&key=yt8&lang=en",
      },
      {
        language: {
          code: "en",
          name: "English (auto-generated)",
        },
        url: "https://www.youtube.com/api/timedtext?v=W6NZfCO5SIk&ei=vMr2ZZfNJZeP_9EP95O78Ak&caps=asr&opi=112496729&xoaf=5&hl=en&ip=0.0.0.0&ipbits=0&expire=1710697772&sparams=ip,ipbits,expire,v,ei,caps,opi,xoaf&signature=9621DA1988B602420F4CD85A4E8DEC68FC1C2D72.4328FCC4BE3F8FBD8293A43354AEDF80E8D21309&key=yt8&kind=asr&lang=en",
      },
    ],
    cards: [null],
    category: "People & Blogs",
    chapters: [
      {
        startingMs: 0,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1866.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBLwWHIzx6v9W-KnUlFw0_4qyvjJQ",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1866.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBATBoK5BKefA6iVt_TE_VTf05zKA",
            width: 336,
          },
        ],
        title: "What is JavaScript",
      },
      {
        startingMs: 281000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_283900.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtF1-KBUEKBCRH0-zGIzW6urht1Q",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_283900.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuSXUMOQproj8XaJNWKOjGA3qClw",
            width: 336,
          },
        ],
        title: "Setting Up the Development Environment",
      },
      {
        startingMs: 472000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_473900.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBKZeLwoB-Hq6pqWiPAkKb7KahdhQ",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_473900.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCd6AZt28v78WOkBWf1uY6IkRFRVw",
            width: 336,
          },
        ],
        title: "JavaScript in Browsers",
      },
      {
        startingMs: 701000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_702800.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAi-K9td_SMyTOE2Cb7j725k2E7gw",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_702800.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJSYy-4wHimt6vRmWBhqpBNemb6Q",
            width: 336,
          },
        ],
        title: "Separation of Concerns",
      },
      {
        startingMs: 827000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_829833.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCz24hdu8WmS1IxTl0_gumvMOEZXA",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_829833.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz5D01Ms6VH1UMNqrdf4qpRkfupQ",
            width: 336,
          },
        ],
        title: "JavaScript in Node",
      },
      {
        startingMs: 971000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_972700.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCXycOQrzAeOxjts-GX2QtBb7oGuQ",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_972700.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkv5407gnmKv2S5vWnGdc60hPh3Q",
            width: 336,
          },
        ],
        title: "Variables",
      },
      {
        startingMs: 1309000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1311166.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCe2fyleyVHFm-GGLZ4zOaK3m7-5g",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1311166.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFjZI-NQdetoyajOeuLl2oMADIZw",
            width: 336,
          },
        ],
        title: "Constants",
      },
      {
        startingMs: 1415000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1418266.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBewomHTBXFX4ejV9rhL0muri-0FA",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1418266.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8aFa5pN6S5spf9oeLjQINkwlnrw",
            width: 336,
          },
        ],
        title: "Primitive Types",
      },
      {
        startingMs: 1607000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1610100.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAldM7c4NLTKRyV9wn0SsYwIbf71g",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1610100.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxLR_Gv9lqOVddgjgmr1Y4p306tQ",
            width: 336,
          },
        ],
        title: "Dynamic Typing",
      },
      {
        startingMs: 1806000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1808200.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD8dtPlDxhg7E25rQiGVUADNg5bTQ",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_1808200.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNK7U6qwbBpPTDz-TPsnZZxv1tKA",
            width: 336,
          },
        ],
        title: "Objects",
      },
      {
        startingMs: 2122000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_2125133.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2Yz-CRAs3T8psndjdsVZrVgrJ0Q",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_2125133.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0e0CG5cSQdIJ-b_7LvPr9xgRBjw",
            width: 336,
          },
        ],
        title: "Arrays",
      },
      {
        startingMs: 2381000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_2386000.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBByGqJAFi0o02MzxM8l1ClVn3v5w",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_2386000.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoGjKnvYtQsphnv5fHL3SOMWkZIA",
            width: 336,
          },
        ],
        title: "Functions",
      },
      {
        startingMs: 2662000,
        thumbnails: [
          {
            height: 94,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_2667100.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2tan0gHbu4AWAXxPhhHVtvW3z2A",
            width: 168,
          },
          {
            height: 188,
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault_2667100.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnMacGLtsTpM8Hl3NTG0Yvfy_jaA",
            width: 336,
          },
        ],
        title: "Types of Functions",
      },
    ],
    description:
      "Learn JavaScript basics in 1 hour! ⚡ This beginner-friendly tutorial covers everything you need to start coding.\n\n🚀 Ready to dive deeper?\n- Check out my complete JavaScript course: https://bit.ly/3Uod3vF\n- Subscribe for more coding tutorials: https://goo.gl/6PYaGF\n\n✋ Stay connected:\n- Twitter: https://twitter.com/moshhamedani\n- Facebook: https://www.facebook.com/programmingwithmosh/\n- Instagram: https://www.instagram.com/codewithmosh.official/\n- LinkedIn: https://www.linkedin.com/school/codewithmosh/\n\n💡 Why JavaScript?\n- It's the essential language for web development.\n- Build front-end AND back-end applications (with Node.js).\n- Super in-demand for developers \n\n👉 This tutorial is perfect for you if:\n- You're a complete beginner.\n- You want a fast and practical intro to JavaScript.\n- You're aiming for a career in web development.\n\n📖 TABLE OF CONTENT\n00:00 What is JavaScript\n04:41 Setting Up the Development Environment \n07:52 JavaScript in Browsers\n11:41 Separation of Concerns\n13:47 JavaScript in Node\n16:11 Variables\n21:49 Constants\n23:35 Primitive Types \n26:47 Dynamic Typing \n30:06 Objects\n35:22 Arrays\n39:41 Functions\n44:22 Types of Functions \n\n⭐️ Related Tutorials \n- Node tutorial for beginners: https://youtu.be/TlB_eWDSMt4\n- Express.js tutorial for beginners: https://youtu.be/pKd0Rpw7O48\n- React tutorial for beginners: https://youtu.be/Ke90Tje7VS0\n- Angular tutorial for beginners: https://youtu.be/k5E2AVpwsko\n\n#coding #javascript #webdevelopment",
    endScreen: {
      items: [
        {
          channel: {
            avatar: [
              {
                height: 250,
                url: "https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s250-c-k-c0x00ffffff-no-rj",
                width: 250,
              },
              {
                height: 400,
                url: "https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s400-c-k-c0x00ffffff-no-rj",
                width: 400,
              },
            ],
            channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
            description:
              "Hi! I'm Mosh 👋, a software engineer with over 20 years of experience.  I'm all about clear, concise, practical coding tutorials – no fluff, just the good stuff! My courses focus on real-world projects and the skills that will get you hired. I've helped millions of students transform their careers. \n\nWant to level up your skills? Subscribe and hit the bell to get notified when I upload new videos!\n",
            title: "Programming with Mosh",
          },
          type: "channel",
        },
        {
          type: "video",
          video: {
            lengthSeconds: 291,
            stats: {
              views: 122964,
            },
            thumbnails: [
              {
                height: 94,
                url: "https://i.ytimg.com/vi/HXH4yu227EQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDs62wA9Tp5n1GgLqPJzCoD5x3Otw",
                width: 168,
              },
              {
                height: 110,
                url: "https://i.ytimg.com/vi/HXH4yu227EQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB13p-a1aS-6K-I9iCYqwcDvEBp5A",
                width: 196,
              },
              {
                height: 138,
                url: "https://i.ytimg.com/vi/HXH4yu227EQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM8tQMfZbKmviNJOPEnVlVyBVw6g",
                width: 246,
              },
              {
                height: 188,
                url: "https://i.ytimg.com/vi/HXH4yu227EQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmASjADMyQv8fEpNhDRF-1XDs0BQ",
                width: 336,
              },
              {
                height: 1080,
                url: "https://i.ytimg.com/vi/HXH4yu227EQ/maxresdefault.jpg",
                width: 1920,
              },
            ],
            title: "Will Devin AI Replace Coders?",
            videoId: "HXH4yu227EQ",
          },
        },
      ],
    },
    isLiveContent: false,
    isLiveNow: false,
    keywords: [
      "javascript tutorial",
      "javascript for beginners",
      "learn javascript for beginners",
      "javascript basics",
      "javascript course",
      "javascript crash course",
      "javascript programming",
      "learn javascript",
      "learning javascript",
      "programming tutorial",
      "js tutorial",
      "javascript",
      "javascript tutorial for beginners",
      "javascript tutorials",
      "javascript beginners",
      "java script tutorial",
      "javascript 2019",
      "javascript lesson",
      "web development",
      "mosh hamedani",
      "front end",
      "javascript functions",
      "code with mosh",
    ],
    lengthSeconds: 2897,
    musics: [],
    publishedDate: "2018-04-23T19:37:33-07:00",
    stats: {
      comments: 6497,
      likes: 211728,
      views: 12102820,
    },
    superTitle: {
      items: ["Front-end Development"],
    },
    thumbnails: [
      {
        height: 94,
        url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDUPDcQbggRbK1LJ0kx0rVa29Hh7w",
        width: 168,
      },
      {
        height: 110,
        url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCvWmwmbo5nuujM2zhUa-T7GdS9oA",
        width: 196,
      },
      {
        height: 138,
        url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiHX8zK2x6Tyt6S5m-nT1JsJuT-A",
        width: 246,
      },
      {
        height: 188,
        url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCkR7TSCkuN8PX89nX4u3LBl4Pfw",
        width: 336,
      },
      {
        height: 1080,
        url: "https://i.ytimg.com/vi_webp/W6NZfCO5SIk/maxresdefault.webp",
        width: 1920,
      },
    ],
    title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    videoId: "W6NZfCO5SIk",
  });

  // useEffect(() => {
  //   setIsLoading(true);
  //   getVideoDetails(id).then((response) => {
  //     setVideoDetails(response);
  //   });
  //   setIsLoading(false);
  //   setTimeout(() => {
  //     setIsMuted(false);
  //     setIsPlaying(true);
  //   }, 2000);
  // }, []);

  return !videoDetails ? (
    <div>loading</div>
  ) : (
    <div className="w-full bg-black text-white px-10 pt-7 flex ">
      <div className="main-video  w-[65%] h-full">
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
      <VideoSuggestionsContainer videoId={videoDetails.videoId} />
    </div>
  );
};

export default VideoDetails;
