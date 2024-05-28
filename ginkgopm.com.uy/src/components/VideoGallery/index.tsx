import React, { useEffect, useState } from "react";

interface Video {
  title: string;
  url: string;
}

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [visibles, setVisibles] = useState<number>(12);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleLoadMore = () => {
    setVisibles((prevVisibles) => prevVisibles + 6);
  };

  return (
    <div className="video-grid">
      {videos.slice(0, visibles).map((video, i) => (
        <div className="item" key={i}>
          <a
            href={`https://drive.google.com/file/d/${video.url}/view`}
            target="_blank"
            rel="noreferrer"
            className="video-link-element"
          >
            <i className="far fa-play-circle"></i>
            <p>{video.title}</p>
          </a>
          <img src="./play.svg" className="play-icon" alt={video.title} />
        </div>
      ))}
      {visibles < videos.length && (
        <button onClick={handleLoadMore}>Cargar mas</button>
      )}
    </div>
  );
};

export default VideoGallery;
