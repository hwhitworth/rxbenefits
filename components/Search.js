import axios from "axios";
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useCallback } from "react";
import { useStore } from "../store/store";

import debounce from "lodash.debounce";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const { movies, setMovies, setMovieFilter, getMovies } = useStore();
  const debouncedSearch = useCallback(
    debounce((nextValue) => searchMovies(nextValue), 1000),
    []
  );

  const handleChange = (value) => {
    if (value) {
      if (!loading) {
        searchMovies(value);
      }
      debouncedSearch(value);
    } else {
      getMovies("now_playing");
    }
  };

  const searchMovies = async function (searchString) {
    setLoading(true);
    setMovieFilter("");
    let movieData = await axios.get("/api/searchMovies", {
      params: { searchString },
    });
    setLoading(false);
    setMovies(movieData);
  };

  return (
    <Input
      backgroundColor="gray.200"
      color="gray.700"
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Search"
      size="lg"
      defaultValue={""}
      width="400px"
      m={4}
    />
  );
}
