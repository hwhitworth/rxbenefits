import axios from "axios";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useStore } from "../store/store";

import Navigation from "../components/Navigation";
import MovieGrid from "../components/MovieGrid";
import Search from "../components/Search";

export default function Home() {
  const { setMovies, setMovieFilter } = useStore();

  const getMovies = async function (movieFilter) {
    setMovieFilter(movieFilter);
    let movieData = await axios.get("/api/getMovies", {
      params: { movieFilter: movieFilter },
    });
    setMovies(movieData);
  };

  useEffect(() => {
    getMovies("now_playing");
  }, []);
  return (
    <Box>
      <Navigation />
      <Search />
      <MovieGrid />
    </Box>
  );
}
