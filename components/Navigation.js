import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useStore } from "../store/store";
import axios from "axios";

export default function Navigation() {
  const { movieFilter, getMovies } = useStore();
  const NavList = [
    {
      title: "Now Playing",
      filter: "now_playing",
    },
    {
      title: "Top Rated",
      filter: "top_rated",
    },
    {
      title: "Popular",
      filter: "popular",
    },
  ];

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
        {NavList.map((navItem, i) => {
          return (
            <NavLink
              currentMovieFilter={movieFilter}
              filterBy={navItem.filter}
              getMovies={getMovies}
            >
              {navItem.title}
            </NavLink>
          );
        })}
      </HStack>
    </Flex>
  );
}

export const NavLink = ({
  children,
  currentMovieFilter,
  filterBy,
  getMovies,
}) => (
  <Text
    cursor="pointer"
    p={4}
    color={currentMovieFilter == filterBy ? "green.400" : "white"}
    _hover={{ color: "green.100" }}
    onClick={() => {
      getMovies(filterBy);
    }}
  >
    {children}
  </Text>
);
