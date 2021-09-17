import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  Img,
  ModalBody,
  ModalCloseButton,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import MovieTrailer from "../MovieTrailer";

function MovieDetail({ isOpen, onClose, movieData }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="100vw" maxWidth="900px">
        <ModalCloseButton />
        <ModalBody>
          <Tabs>
            <TabList>
              <Tab>Details</Tab>
              <Tab>Movie Trailer</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <HStack alignItems="flex-start">
                  <Box width="30%">
                    <Img
                      width="100%"
                      src={
                        movieData?.poster_path
                          ? `${process.env.NEXT_PUBLIC_MOVIE_POSTER_SERVICE_URL}${movieData.poster_path}`
                          : "/popcorn.png"
                      }
                    />
                  </Box>
                  <Box width="65%" pl={4}>
                    <Text fontSize="x-large" fontWeight="bold" pb={4}>
                      {movieData?.title}
                    </Text>
                    <Text fontSize="small" fontWeight="bold">
                      Overview:
                    </Text>
                    <Text fontSize="small">{movieData?.overview}</Text>
                  </Box>
                </HStack>
              </TabPanel>
              <TabPanel>
                <MovieTrailer movieID={movieData?.id} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default MovieDetail;
