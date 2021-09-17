import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const useStore = create(
  devtools((set) => ({
    movieFilter: "now_playing",
    movies: [],
    setMovieFilter: (filter) => {
      set({
        movieFilter: filter,
      });
    },
    getMovies: async (movieFilter) => {
      set({
        movieFilter: movieFilter,
      });
      const movieData = await axios.get("/api/getMovies", {
        params: { movieFilter: movieFilter },
      });
      set({
        movies: movieData,
      });
    },
    setMovies: (movies) => {
      set({
        movies: movies,
      });
    },
  }))
);
