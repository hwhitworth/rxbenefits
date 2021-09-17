import axios from "axios";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useStore } from "../store/store";

import Navigation from "../components/Navigation";
import MovieGrid from "../components/MovieGrid";
import Search from "../components/Search";

export default function Home() {
  const { getMovies } = useStore();

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
