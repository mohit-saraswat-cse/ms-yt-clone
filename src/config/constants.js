export const Google_api_key = "AIzaSyCXFInuXYyNSOeyoXfRRh9KA2ODAs3vsHo";

export const video_recommendations_api = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${Google_api_key}&channelId=`;

export const videoDetailsApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Google_api_key;

export const youtube_video_api =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_api_key;

export const youtube_search_api =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const Search_results_api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const channelImage_api =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Google_api_key;

export const video_comments_details_api =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=" +
  Google_api_key +
  "&videoId=";
var nameList = [
  "Adil",
  "Babu",
  "Afroz",
  "Kiran",
  "Vinay",
  "Balu",
  "Hk",
  "Sai Teja",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// Generating Random Text for Live Chat
export function getRandomText(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const staticReplies = [
  {
    "kind": "youtube#commentThread",
    "etag": "nl7l3g8axcnZihnEh4X3mQqcDYM",
    "id": "1UgyhNDE5HzMdmALK6mt4AaABAg",
    "replies": [
      {
        "kind": "youtube#commentThread",
        "etag": "nl7l3g8axcnZihnEh4X3mQqcDYM",
        "id": "2UgyhNDE5HzMdmALK6mt4AaABAg",
        "replies": [],
        "snippet": {
          "channelId": "UCpEhnqL0y41EpW2TvWAHD7Q",
          "videoId": "iuCEi73m8Qs",
          "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "vB975AvEiqtJFlloX4lR18NWgYc",
            "id": "3UgyhNDE5HzMdmALK6mt4AaABAg",
            "snippet": {
              "channelId": "UCpEhnqL0y41EpW2TvWAHD7Q",
              "videoId": "iuCEi73m8Qs",
              "textDisplay": "nice comment :)",
              "textOriginal": "nice comment :)",
              "authorDisplayName": "dummy_nested_comments",
              "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/APkrFKYprEjD4lel2d0rwIWEWIDjg7YRyZ7YHqgwHwOjAdqP47Bb74OxycpjYF3pLF3b=s48-c-k-c0x00ffffff-no-rj",
              "authorChannelUrl": "http://www.youtube.com/channel/UCGtBJOo_03h5mcrH3XfBmZA",
              "authorChannelId": {
                "value": "UCGtBJOo_03h5mcrH3XfBmZA"
              },
              "canRate": true,
              "viewerRating": "none",
              "likeCount": 6,
              "publishedAt": "2023-11-07T17:43:47Z",
              "updatedAt": "2023-11-07T17:43:47Z"
            }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
        }
      },
    ],
    "snippet": {
      "channelId": "UCpEhnqL0y41EpW2TvWAHD7Q",
      "videoId": "iuCEi73m8Qs",
      "topLevelComment": {
        "kind": "youtube#comment",
        "etag": "vB975AvEiqtJFlloX4lR18NWgYc",
        "id": "6UgyhNDE5HzMdmALK6mt4AaABAg",
        "snippet": {
          "channelId": "UCpEhnqL0y41EpW2TvWAHD7Q",
          "videoId": "iuCEi73m8Qs",
          "textDisplay": "nice comment :)",
          "textOriginal": "nice comment :)",
          "authorDisplayName": "dummy_nested_comments",
          "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/APkrFKYprEjD4lel2d0rwIWEWIDjg7YRyZ7YHqgwHwOjAdqP47Bb74OxycpjYF3pLF3b=s48-c-k-c0x00ffffff-no-rj",
          "authorChannelUrl": "http://www.youtube.com/channel/UCGtBJOo_03h5mcrH3XfBmZA",
          "authorChannelId": {
            "value": "UCGtBJOo_03h5mcrH3XfBmZA"
          },
          "canRate": true,
          "viewerRating": "none",
          "likeCount": 36,
          "publishedAt": "2023-11-07T17:43:47Z",
          "updatedAt": "2023-11-07T17:43:47Z"
        }
      },
      "canReply": true,
      "totalReplyCount": 0,
      "isPublic": true
    }
  },
  {
    "kind": "youtube#commentThread",
    "etag": "nl7l3g8axcnZihnEh4X3mQqcDYM",
    "id": "7UgyhNDE5HzMdmALK6mt4AaABAg",
    "replies": [],
    "snippet": {
      "channelId": "UCpEhnqL0y41EpW2TvWAHD7Q",
      "videoId": "iuCEi73m8Qs",
      "topLevelComment": {
        "kind": "youtube#comment",
        "etag": "vB975AvEiqtJFlloX4lR18NWgYc",
        "id": "8UgyhNDE5HzMdmALK6mt4AaABAg",
        "snippet": {
          "channelId": "UCpEhnqL0y41EpW2TvWAHD7Q",
          "videoId": "iuCEi73m8Qs",
          "textDisplay": "nice comment :)",
          "textOriginal": "nice comment :)",
          "authorDisplayName": "dummy_nested_comments",
          "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/APkrFKYprEjD4lel2d0rwIWEWIDjg7YRyZ7YHqgwHwOjAdqP47Bb74OxycpjYF3pLF3b=s48-c-k-c0x00ffffff-no-rj",
          "authorChannelUrl": "http://www.youtube.com/channel/UCGtBJOo_03h5mcrH3XfBmZA",
          "authorChannelId": {
            "value": "UCGtBJOo_03h5mcrH3XfBmZA"
          },
          "canRate": true,
          "viewerRating": "none",
          "likeCount": 3,
          "publishedAt": "2023-11-07T17:43:47Z",
          "updatedAt": "2023-11-07T17:43:47Z"
        }
      },
      "canReply": true,
      "totalReplyCount": 0,
      "isPublic": true
    }
  }
];