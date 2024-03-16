import React, { useEffect, useRef, useState } from "react";
import { getVideoComments } from "../../utils/api";
import VideoComment from "./VideoComment";

const VideoCommentsContainer = ({ videoId }) => {
  const [videoComments, setVideoComments] = useState({
    comments: [
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/6L7IpjExNfXSA2MgVsOIhphOUxVJtaFrzvfuc1C-0R6YGQm5R_tLU15zOM6Y9WAfG54nLSwCyw=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/6L7IpjExNfXSA2MgVsOIhphOUxVJtaFrzvfuc1C-0R6YGQm5R_tLU15zOM6Y9WAfG54nLSwCyw=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/6L7IpjExNfXSA2MgVsOIhphOUxVJtaFrzvfuc1C-0R6YGQm5R_tLU15zOM6Y9WAfG54nLSwCyw=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCn52_KgNDqR8a7jQG_TCDxg",
          isChannelOwner: false,
          title: "@cararoberts818",
        },
        commentId: "Ugw1lAaO_-Ru-PodYAx4AaABAg",
        content:
          "I LOVE U GUYSSSS❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ ONLY REAL FANS CAN LIKE THIS COMMENT ❤❤❤❤",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd3MWxBYU9fLVJ1LVBvZFlBeDRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3cxbEFhT18tUnUtUG9kWUF4NEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "23 hours ago",
        stats: {
          replies: 35,
          votes: 371,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_kkIZhkSVj5ZQ4kYvFUjyAOoLzqagLdCcFra-pflQ5MVxBaOoE-xvn893Dd2fu_=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_kkIZhkSVj5ZQ4kYvFUjyAOoLzqagLdCcFra-pflQ5MVxBaOoE-xvn893Dd2fu_=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_kkIZhkSVj5ZQ4kYvFUjyAOoLzqagLdCcFra-pflQ5MVxBaOoE-xvn893Dd2fu_=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCGQBBzCRbx6m-mx-PNwWXsg",
          isChannelOwner: false,
          title: "@madelinecampos",
        },
        commentId: "UgwHnsmJJDm6f8eoGVt4AaABAg",
        content:
          "Adley we build the best leprechaun traps I think we’re going to catch the leprechaun you build the best leprechaun trap only the real fans like this give a like you are a real fan",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd3SG5zbUpKRG02Zjhlb0dWdDRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dIbnNtSkpEbTZmOGVvR1Z0NEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 1,
          votes: 9,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_k3tT5i1Va4xRUoRur0VYxtEyaT6gmSkj72mzSZk1xGpWUTnnOLFu7m3xWj4gHQ=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_k3tT5i1Va4xRUoRur0VYxtEyaT6gmSkj72mzSZk1xGpWUTnnOLFu7m3xWj4gHQ=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_k3tT5i1Va4xRUoRur0VYxtEyaT6gmSkj72mzSZk1xGpWUTnnOLFu7m3xWj4gHQ=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UC8uRlJu1cvqcGim2wi1jC8Q",
          isChannelOwner: false,
          title: "@kennethscott5804",
        },
        commentId: "UgwCWIWDGo4ZqKXMwgJ4AaABAg",
        content:
          "What if the leprechaun watches your videos from your traps. Guys like if you think that too",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd3Q1dJV0RHbzRacUtYTXdnSjRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dDV0lXREdvNFpxS1hNd2dKNEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 7,
          votes: 49,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/bdnqSPnP-IonVyGRH3Mga9O4DdkekihZxaNJj95_zNxYLdKQ-HeUlbvckKQBoKt49l6nrFXmlw=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/bdnqSPnP-IonVyGRH3Mga9O4DdkekihZxaNJj95_zNxYLdKQ-HeUlbvckKQBoKt49l6nrFXmlw=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/bdnqSPnP-IonVyGRH3Mga9O4DdkekihZxaNJj95_zNxYLdKQ-HeUlbvckKQBoKt49l6nrFXmlw=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCrSIEabJ3VtiNAzv_VFR4Wg",
          isChannelOwner: false,
          title: "@reesesreality6649",
        },
        commentId: "Ugx_a7BTojiL1h9jdnh4AaABAg",
        content: "I love your videos so much I watch every video you made",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd4X2E3QlRvamlMMWg5amRuaDRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3hfYTdCVG9qaUwxaDlqZG5oNEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 1,
          votes: 27,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_m5KQL3QHVzGfe0rTwXiWLNZHLyiTBazq5bO-zcSbEDi99Oj7qo1jpcbxkAXToG=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_m5KQL3QHVzGfe0rTwXiWLNZHLyiTBazq5bO-zcSbEDi99Oj7qo1jpcbxkAXToG=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_m5KQL3QHVzGfe0rTwXiWLNZHLyiTBazq5bO-zcSbEDi99Oj7qo1jpcbxkAXToG=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCWxxQWeDW3jSLaSIJmP3rng",
          isChannelOwner: false,
          title: "@nikolinebilgrav9134",
        },
        commentId: "UgziZoYIuneHmKEr6394AaABAg",
        content: "Omg i Love you guys❤❤❤❤❤❤❤❤😊",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd6aVpvWUl1bmVIbUtFcjYzOTRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3ppWm9ZSXVuZUhtS0VyNjM5NEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 8,
          votes: 56,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/WYPlf86G59sXNJ4H_itpgP22TxInuz3emBAhRuyqIbkKjqzJle591I_v7w_mHSKDetuqT52p=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/WYPlf86G59sXNJ4H_itpgP22TxInuz3emBAhRuyqIbkKjqzJle591I_v7w_mHSKDetuqT52p=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/WYPlf86G59sXNJ4H_itpgP22TxInuz3emBAhRuyqIbkKjqzJle591I_v7w_mHSKDetuqT52p=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UC0D-6NCbHl_sSQUmT1h_Jvg",
          isChannelOwner: false,
          title: "@Gamerpeople200",
        },
        commentId: "Ugz-Qs2qbhPRJBSAuNN4AaABAg",
        content:
          "Next leprechaun day you should make a maze because the leprechaun cannot grow bigger so then it will be trapped when you get to the end by a box please do it next leprechaun's Day🙏",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd6LVFzMnFiaFBSSkJTQXVOTjRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3otUXMycWJoUFJKQlNBdU5ONEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 1,
          votes: 8,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_lqRLH9K8HT2sjmdmat7fDNGp84TS31klBBjibScCTG7kzn7GAm100scCDj1UuN=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_lqRLH9K8HT2sjmdmat7fDNGp84TS31klBBjibScCTG7kzn7GAm100scCDj1UuN=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_lqRLH9K8HT2sjmdmat7fDNGp84TS31klBBjibScCTG7kzn7GAm100scCDj1UuN=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCWFc5qdhxYGKirOpZBpNLoQ",
          isChannelOwner: false,
          title: "@MarianaCedillo-di8zn",
        },
        commentId: "UgyfcPUhelYhVn_Nr8x4AaABAg",
        content: "Only real a for Adley fans can like this comment",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "21 hours ago",
        stats: {
          replies: 0,
          votes: 10,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_kyzqyGNxA547PO1OED6T_TA6UcT3TcgKNy6Q=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_kyzqyGNxA547PO1OED6T_TA6UcT3TcgKNy6Q=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_kyzqyGNxA547PO1OED6T_TA6UcT3TcgKNy6Q=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UChtDi7It3mfADOcvD0G9b4A",
          isChannelOwner: false,
          title: "@spotticusftw55",
        },
        commentId: "UgxPGbx6YLvhtj9frXp4AaABAg",
        content: "I LOVE YALL",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd4UEdieDZZTHZodGo5ZnJYcDRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3hQR2J4NllMdmh0ajlmclhwNEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 2,
          votes: 20,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_kkIZhkSVj5ZQ4kYvFUjyAOoLzqagLdCcFra-pflQ5MVxBaOoE-xvn893Dd2fu_=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_kkIZhkSVj5ZQ4kYvFUjyAOoLzqagLdCcFra-pflQ5MVxBaOoE-xvn893Dd2fu_=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_kkIZhkSVj5ZQ4kYvFUjyAOoLzqagLdCcFra-pflQ5MVxBaOoE-xvn893Dd2fu_=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCGQBBzCRbx6m-mx-PNwWXsg",
          isChannelOwner: false,
          title: "@madelinecampos",
        },
        commentId: "UgzXxNYgV-k7Wls08F94AaABAg",
        content:
          "We build one of the best traps for the leprechaun I love you all your family like this.",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd6WHhOWWdWLWs3V2xzMDhGOTRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3pYeE5ZZ1YtazdXbHMwOEY5NEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 1,
          votes: 16,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/W0Za0aHwyrytZ50cb2BJAjz7gpqBGSi9OKZ-TJYgBdcrm7DArrepDEpJZtod8BPcmFq6kQjJpg=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/W0Za0aHwyrytZ50cb2BJAjz7gpqBGSi9OKZ-TJYgBdcrm7DArrepDEpJZtod8BPcmFq6kQjJpg=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/W0Za0aHwyrytZ50cb2BJAjz7gpqBGSi9OKZ-TJYgBdcrm7DArrepDEpJZtod8BPcmFq6kQjJpg=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCODRhUOQagZC0h0aFURRVxg",
          isChannelOwner: false,
          title: "@YourKynsbear",
        },
        commentId: "Ugxv2P69ShNTURniDil4AaABAg",
        content:
          "Yay, another leprechaun trap video!🎉 I love your leprechaun trap videos😂❤",
        creatorHeart: true,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd4djJQNjlTaE5UVVJuaURpbDRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3h2MlA2OVNoTlRVUm5pRGlsNEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 2,
          votes: 15,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_mcz0Cilt1arRSOHXtIHmHu0xvNFRAqbld8XQ=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_mcz0Cilt1arRSOHXtIHmHu0xvNFRAqbld8XQ=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_mcz0Cilt1arRSOHXtIHmHu0xvNFRAqbld8XQ=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCTmWD-cnCrAOEaTc5eVyRgA",
          isChannelOwner: false,
          title: "@kristenreed1271",
        },
        commentId: "UgwgK1W64mA5GM1lN_x4AaABAg",
        content:
          "Watching this video now with my daughter! We made our leprechaun traps at the same time! 😆 my daughter says “i really want to meet Adley cause i loves her” haha. Your family is adorable!",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd3Z0sxVzY0bUE1R00xbE5feDRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dnSzFXNjRtQTVHTTFsTl94NEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "23 hours ago",
        stats: {
          replies: 11,
          votes: 11,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_kKdyyeaLUyKavJqf3GnFJHWjMYh_l6x9B8Ag=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_kKdyyeaLUyKavJqf3GnFJHWjMYh_l6x9B8Ag=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_kKdyyeaLUyKavJqf3GnFJHWjMYh_l6x9B8Ag=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCZrBH2OCUZCiAwbs2cgJfdQ",
          isChannelOwner: false,
          title: "@mikefreimuth8999",
        },
        commentId: "Ugwobak8nvtTUqm_ZTJ4AaABAg",
        content: "I love your  videos 😍🎉❤😊",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd3b2JhazhudnRUVXFtX1pUSjRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dvYmFrOG52dFRVcW1fWlRKNEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 2,
          votes: 32,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/exm0_NrIPY8VfmwdcKQze1LNv4k6TcIZl-tTdFabHOIFJARVEf35sU-GECNG58Q25iqWBYeXHw=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/exm0_NrIPY8VfmwdcKQze1LNv4k6TcIZl-tTdFabHOIFJARVEf35sU-GECNG58Q25iqWBYeXHw=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/exm0_NrIPY8VfmwdcKQze1LNv4k6TcIZl-tTdFabHOIFJARVEf35sU-GECNG58Q25iqWBYeXHw=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCnyaHiop_PF1qrxQV9G-RGg",
          isChannelOwner: false,
          title: "@robynbetteridge",
        },
        commentId: "Ugwmf1-enF0KmRZAkyR4AaABAg",
        content: "Omg I love you I am your number one fan I 🎉🎉🎉🎉🎉❤❤❤❤❤u",
        creatorHeart: false,
        cursorReplies:
          "Eg0SC2NoaFhLbDBwR1RvGAYygwEaUBIaVWd3bWYxLWVuRjBLbVJaQWt5UjRBYUFCQWciAggAKhhVQ0JKdXhmcVp1aWlidmN3U2M4VmlHc1EyC2NoaFhLbDBwR1RvQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dtZjEtZW5GMEttUlpBa3lSNEFhQUJBZw%3D%3D",
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 3,
          votes: 21,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_k6DpNRn600pi3VKnhia8KzF4O_DUGuOmw5YqPyILB_SItNPSBbPkUnEr1FklbG=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_k6DpNRn600pi3VKnhia8KzF4O_DUGuOmw5YqPyILB_SItNPSBbPkUnEr1FklbG=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_k6DpNRn600pi3VKnhia8KzF4O_DUGuOmw5YqPyILB_SItNPSBbPkUnEr1FklbG=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCGqJn5hC3gJgNwCGnrB1gsA",
          isChannelOwner: false,
          title: "@user-hu3js4df4m",
        },
        commentId: "Ugy8g-FzBA5jedWBQP54AaABAg",
        content:
          "I Been watching your videos on YouTube since adley was born who is with me\n👇",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 0,
          votes: 8,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_khInVJKrUccYX-NHbSamMjNAG-HxT1t3lLmA=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_khInVJKrUccYX-NHbSamMjNAG-HxT1t3lLmA=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_khInVJKrUccYX-NHbSamMjNAG-HxT1t3lLmA=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCZ9AnOYnQL2AhLTZCQ4kFCQ",
          isChannelOwner: false,
          title: "@joehfuller9931",
        },
        commentId: "Ugxkzowqx_y6-NzrLjJ4AaABAg",
        content: "Hi! my name is bryony i love your vids!😁",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago",
        stats: {
          replies: 0,
          votes: 13,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_k5vLqdTAI_Rv3XTc5az_vbuJlFIoTTLjVVeDjp=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_k5vLqdTAI_Rv3XTc5az_vbuJlFIoTTLjVVeDjp=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_k5vLqdTAI_Rv3XTc5az_vbuJlFIoTTLjVVeDjp=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UC57JwZ5rmPVc1t0NbJkfxUw",
          isChannelOwner: false,
          title: "@eantm9176",
        },
        commentId: "UgzjiytJk-xJ50ChQ0p4AaABAg",
        content:
          "My birthday is coming up soon just three more days. Me and my sister are a huge fan of you.",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "23 hours ago",
        stats: {
          replies: 0,
          votes: 4,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/BU7AdVz6ulbX76HoQ1BVAz3m2KhoQSK8rzRYNHgI3M8VXxrWbjnZOz25FuicK61Z_7vIPnEewag=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/BU7AdVz6ulbX76HoQ1BVAz3m2KhoQSK8rzRYNHgI3M8VXxrWbjnZOz25FuicK61Z_7vIPnEewag=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/BU7AdVz6ulbX76HoQ1BVAz3m2KhoQSK8rzRYNHgI3M8VXxrWbjnZOz25FuicK61Z_7vIPnEewag=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCfxA0AnTreCf4bmIBDtVz0g",
          isChannelOwner: false,
          title: "@Maddiegaming1016",
        },
        commentId: "UgwN9b9OtrI5iFrJAil4AaABAg",
        content:
          "Hi I love your leprechaun traps! They look so fun and soo cool!",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "20 hours ago",
        stats: {
          replies: 0,
          votes: 3,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/ytc/AIdro_n8999ajEErCLb3jjvN9fjtZP2QSrcaunAOMu39UEQ=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/ytc/AIdro_n8999ajEErCLb3jjvN9fjtZP2QSrcaunAOMu39UEQ=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/ytc/AIdro_n8999ajEErCLb3jjvN9fjtZP2QSrcaunAOMu39UEQ=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCuFkHSGcE24iBw9uMS90xxQ",
          isChannelOwner: false,
          title: "@chelseamarchand2077",
        },
        commentId: "UgxC1aLKoHq5ZXGpjCB4AaABAg",
        content:
          "I love you guys.It's pretty, but you guys are like the best you tubers in the world.I wish I could go there but I know it's stress passing😢",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "22 hours ago",
        stats: {
          replies: 0,
          votes: 2,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/PXByngQmSCvX-hLCE4gfFhPOXAtMWIWHCZChFUfPkgEj2-pYpRu6_BFHGU1iC-wD-x2Xg8UzYA=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/PXByngQmSCvX-hLCE4gfFhPOXAtMWIWHCZChFUfPkgEj2-pYpRu6_BFHGU1iC-wD-x2Xg8UzYA=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/PXByngQmSCvX-hLCE4gfFhPOXAtMWIWHCZChFUfPkgEj2-pYpRu6_BFHGU1iC-wD-x2Xg8UzYA=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCs9yvMgbrzyx55cty5bSDBg",
          isChannelOwner: false,
          title: "@preppyBrynandEmily",
        },
        commentId: "UgwKkcSQLmCzEt1gAtt4AaABAg",
        content:
          "I love you Adley and you admire me ,you are also my favorite person and YouTuber.Thank you for these videos",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "8 hours ago",
        stats: {
          replies: 0,
          votes: 2,
        },
      },
      {
        author: {
          avatar: [
            {
              height: 48,
              url: "https://yt3.ggpht.com/iTXkNv47cRba52Jl6GyWqspPXSzMZZHR8Ubi3_78W4l47B0pRFnAvAut-Z_GB_HkMdwPkZMW3RM=s48-c-k-c0x00ffffff-no-rj",
              width: 48,
            },
            {
              height: 88,
              url: "https://yt3.ggpht.com/iTXkNv47cRba52Jl6GyWqspPXSzMZZHR8Ubi3_78W4l47B0pRFnAvAut-Z_GB_HkMdwPkZMW3RM=s88-c-k-c0x00ffffff-no-rj",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/iTXkNv47cRba52Jl6GyWqspPXSzMZZHR8Ubi3_78W4l47B0pRFnAvAut-Z_GB_HkMdwPkZMW3RM=s176-c-k-c0x00ffffff-no-rj",
              width: 176,
            },
          ],
          badges: [],
          channelId: "UCqLyN1iOTm2rSYV6ANh4UhA",
          isChannelOwner: false,
          title: "@AngelStitchlsove",
        },
        commentId: "UgxRN4E4p_ApCLjrE7B4AaABAg",
        content: "First, I love your videos, and i liked the video At first.",
        creatorHeart: false,
        cursorReplies: null,
        paid: {
          amount: null,
          status: false,
        },
        pinned: {
          status: false,
          text: null,
        },
        publishedTimeText: "1 day ago (edited)",
        stats: {
          replies: 0,
          votes: 10,
        },
      },
    ],
    cursorNext:
      "Eg0SC2NoaFhLbDBwR1RvGAYy1QIKqwJnZXRfcmFua2VkX3N0cmVhbXMtLUNxY0JDSUFFRlJlMzBUZ2FuQUVLbHdFSTJGOFFnQVFZQnlLTUFYdVBQd0RIc1VpVk5JOVRlRXpmZ2pReVNOVk1pWVVWMlRnN0RaX2lKX3pIWW1RUHlxVTBGR3pSbTJlb2tsWEdoZ0xheVVFQnhTNVRFdk10ajRBWVZ0S1dFYXdNMk9CRGYyeUFKVHZjZGYwZTd3SHd6ckR1ZUp0UHUtQ01EUjZKYnFZcTM5ZUFuMVN2UWF0SWExZGowTlNlUVB3cklQcHJqTEJhVDZHT0xxdmU4NW9KZDl1RGhNbE9Hb0VDRUJRU0JRaW9JQmdBRWdVSWlTQVlBQklGQ0lnZ0dBQVNCUWlISUJnQUVnY0loU0FRRkJnQkdBQSIRIgtjaGhYS2wwcEdUbzAAeAEoFEIQY29tbWVudHMtc2VjdGlvbg%3D%3D",
    filters: [
      {
        cursorFilter:
          "Eg0SC2NoaFhLbDBwR1RvGAYyJSIRIgtjaGhYS2wwcEdUbzAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
        selected: true,
        title: "Top comments",
      },
      {
        cursorFilter:
          "Eg0SC2NoaFhLbDBwR1RvGAYyJSIRIgtjaGhYS2wwcEdUbzABeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D",
        selected: false,
        title: "Newest first",
      },
    ],
    totalCommentsCount: 762,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const divRef = useRef();
  // console.log(divRef.current.scrollHeight);
  useEffect(() => {
    // getVideoComments(videoId).then((e) => {
    //   console.log(e);
    //   setVideoComments(e);
    // });
  }, []);
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
  }, [isLoading, isEndReached]);
  return (
    <div className="w-full my-3 overflow-auto" ref={divRef}>
      <h1 className="text-xl font-semibold">
        {videoComments?.totalCommentsCount} comments
      </h1>
      {videoComments?.comments?.map((e) => (
        <VideoComment comment={e} key={e.commentId} />
      ))}
    </div>
  );
};

export default VideoCommentsContainer;
