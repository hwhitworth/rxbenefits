import { Box, Text, SimpleGrid, Img, useDisclosure } from "@chakra-ui/react";
import MovieDetail from "../components/modals/MovieDetail";
import { useStore } from "../store/store";
import { useState } from "react";
export default function MovieGrid() {
  const [selectedMovie, setSelectedMovie] = useState();
  const selectMovie = function (movie) {
    setSelectedMovie(movie);
    onOpen();
  };

  const { movies } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SimpleGrid columns={3} spacing={10} margin={4}>
        {movies.data &&
          movies.data.results.map((movie, i) => {
            return (
              <Box
                borderRadius="md"
                shadow="lg"
                rounded="base"
                cursor="pointer"
                onClick={() => selectMovie(movie)}
                key={i}
              >
                <Img
                  width="100%"
                  borderTopRadius="md"
                  src={
                    movie.poster_path
                      ? `${process.env.NEXT_PUBLIC_MOVIE_POSTER_SERVICE_URL}${movie.poster_path}`
                      : "/popcorn.png"
                  }
                />
                <Box p={2}>
                  <Text
                    fontSize="small"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    {movie.title}
                  </Text>
                  <Text
                    fontSize="x-small"
                    fontWeight="bold"
                    textTransform="uppercase"
                  >
                    {movie.release_date}
                  </Text>
                </Box>
              </Box>
            );
          })}
      </SimpleGrid>
      <MovieDetail
        isOpen={isOpen}
        onClose={onClose}
        movieData={selectedMovie}
      />
    </>
  );
}
