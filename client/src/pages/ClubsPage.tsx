import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clubsRequest } from '../store/clubs/clubsSlicer';
import { clubs } from '../store/clubs/clubsSlicer';

import { Box, Center, Grid, Text } from '@chakra-ui/react';

import Header from '../components/header/Header';
import TableClub from '../components/clubs/TableClub';
import Paginator from '../components/clubs/Paginator';
import SearchClub from '../components/clubs/SearchClub';


const ClubsPage = () => {
  const clubsLiga = useSelector(clubs);
  const dispatch = useDispatch();

  const loadClubs = () => {
    dispatch(clubsRequest());
  };

  useEffect(() => {
    loadClubs();
  }, []);

  return (
    <Box bg="#F0F6F5" minHeight="100vh" color="#319795">
      <Header />
      <Center>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)' }}>
         
          <Center>
            <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} mt="5">
              Clubs de La Liga
            </Text>
          </Center>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)' }} mt="5">
            <Text cursor={'pointer'} mt='2'>Favoritos</Text>
            <SearchClub></SearchClub>
          </Grid>
         
          <TableClub clubsLiga={clubsLiga} />
          <Paginator />
        </Grid>
      </Center>
    </Box>
  );
};

export default ClubsPage;
