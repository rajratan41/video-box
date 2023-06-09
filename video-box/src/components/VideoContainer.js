import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

//Youtube Videos API
import { YOUTUBE_VIDEOS_API } from "../utils/constant";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div>
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideoContainer;
