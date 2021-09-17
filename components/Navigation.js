import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useStore } from "../store/store";
import axios from "axios";

export default function Navigation() {
  const { movieFilter, setMovies, setMovieFilter } = useStore();

  const getMovies = async function (movieFilter) {
    setMovieFilter(movieFilter);
    let movieData = await axios.get("/api/getMovies", {
      params: { movieFilter: movieFilter },
    });
    setMovies(movieData);
    console.log(movieData);
  };

  useEffect(() => {
    getMovies(movieFilter);
  }, []);

  return (
    <Flex
      width="full"
      backgroundColor="#060606"
      p={4}
      justifyContent="space-between"
    >
      <HStack>
        <Text color="white">RX Beneflix</Text>
      </HStack>
      <HStack color="gray.400">
        <Text
          cursor="pointer"
          p={4}
          color={movieFilter == "now_playing" ? "green.400" : "white"}
          _hover={{ color: "green.100" }}
          onClick={() => {
            getMovies("now_playing");
          }}
        >
          Now Playing
        </Text>
        <Text
          cursor="pointer"
          p={4}
          color={movieFilter == "top_rated" ? "green.400" : "white"}
          _hover={{ color: "green.100" }}
          onClick={() => {
            getMovies("top_rated");
          }}
        >
          Top Rated
        </Text>
        <Text
          cursor="pointer"
          p={4}
          color={movieFilter == "popular" ? "green.400" : "white"}
          _hover={{ color: "green.100" }}
          onClick={() => {
            getMovies("popular");
          }}
        >
          Popular
        </Text>
      </HStack>
    </Flex>
  );
}
