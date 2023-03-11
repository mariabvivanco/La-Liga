//Página que muestra la lista de Clubs, permit acceder a un club clickeando en él

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clubsRequest } from '../store/clubs/clubsSlicer';
import { clubs, favorite, setFavorite, status } from '../store/clubs/clubsSlicer';

import { Box, Center, Grid, Text, Button, Spinner, useColorMode } from '@chakra-ui/react';

import Header from '../components/header/Header';
import TableClub from '../components/clubs/TableClub';
import Paginator from '../components/clubs/Paginator';
import SearchClub from '../components/clubs/SearchClub';

const ClubsPage = () => {
  const clubsLiga = useSelector(clubs);
  const isLoading = useSelector(status)==='pending';
  const favoriteLiga = useSelector(favorite);
  const dispatch = useDispatch();
  const {colorMode} = useColorMode()

  const loadClubs = () => {
    dispatch(clubsRequest());
  };

  useEffect(() => {
    loadClubs();
  }, []);

  return (
    <Box bg={colorMode==='light'?'brand.greenlight':'brand.grey'}
         minHeight="100vh"
         color={colorMode==='light'?'brand.green':'brand.greenlight'}
         pb="10">
      <Header />
      {isLoading? 
        <Center mt='25%'>
          <Spinner />
        </Center>
        :<Center>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)' }}>
          <Center>
            <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} mt="5">
              Clubs de La Liga
            </Text>
          </Center>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)'}} m="5">
            <Button
              gap={4}
              w={40}
              mb={5}
              colorScheme="teal"
              variant="solid"
              onClick={() => {
                dispatch(setFavorite());
              }}
            >
              {favoriteLiga ? 'Ver Todos' : 'Ver Favoritos'}
            </Button>
            <SearchClub></SearchClub>
          </Grid>

          <TableClub clubsLiga={clubsLiga} />
          <Paginator />
        </Grid>
      </Center>}
    </Box>
  );
};

export default ClubsPage;
