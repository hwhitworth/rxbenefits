import { AspectRatio, Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieTrailer({ movieID, movieTitle }) {
  const [videoKey, setVideoKey] = useState("");
  const fetchVideo = async function () {
    let videoData = await axios.get("/api/getMovieTrailer", {
      params: { movieID },
    });
    videoData.data.results.length && setVideoKey(videoData.data.results[0].key);
  };

  useEffect(() => {
    fetchVideo();
  }, [movieID]);
  return (
    <>
      {videoKey ? (
        <AspectRatio ratio={16 / 9}>
          <iframe
            title={movieTitle}
            src={`https://www.youtube.com/embed/${videoKey}`}
            allowFullScreen
          />
        </AspectRatio>
      ) : (
        <Text>No video available for this movie.</Text>
      )}
    </>
  );
}

export default MovieTrailer;
