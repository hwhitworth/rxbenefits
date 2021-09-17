import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    movieFilter: "now_playing",
    movies: [],
    setMovieFilter: (filter) => {
      set({
        movieFilter: filter,
      });
    },
    setMovies: (movies) => {
      set({
        movies: movies,
      });
    },
  }))
);
