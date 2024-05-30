import React, { useEffect, useState } from "react";

interface Video {
  title: string;
  url: string;
}

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [visibles, setVisibles] = useState<number>(15);
  const [eventTitle, setEventTitle] = useState<string>("")

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const eventYear = searchParams.get("eventYear") || "2024";

    const fetchData = async () => {
      try {
        const response = await fetch(`/data/${eventYear}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.title) {
          setEventTitle(data.title)
          setVideos(data.videos)
        } else {
          throw new Error('Data not found.')
        }
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibles((prevVisibles) => prevVisibles + 6);
  };

  return (
    <React.Fragment>
      <h2 className="title">{eventTitle}</h2>
      <div className="video-grid">
        {videos.slice(0, visibles).map((video, i) => (
          <div className="item" key={i}>
            <a
              href={video.url}
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
      </div>
        {visibles < videos.length && (
          <button onClick={handleLoadMore}>Cargar más <i className="fas fa-plus"></i></button>
        )}
    </React.Fragment>
  );
};

export default VideoGallery;
