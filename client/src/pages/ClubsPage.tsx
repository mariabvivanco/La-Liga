import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clubsRequest } from '../store/clubs/clubsSlicer';
import { clubs } from '../store/clubs/clubsSlicer';

import {

  Box,
  Center,
  Grid,
  Text,
} from '@chakra-ui/react';

import Header from '../components/header/Header';
import TableClub from '../components/clubs/TableClub';

const ClubsPage = () => {
  const clubsLiga = useSelector(clubs);
  const dispatch = useDispatch();

  const loadClubs = () => {
    dispatch(clubsRequest());
  };

  useEffect(() => {
    console.log('mando a llamara  aloadClubs');
    loadClubs();
  }, []);

  return (
    <Box bg="#F0F6F5" minHeight="100vh" color="#319795">
      <Header/>
      <Center>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)' }}>
          <Center>
            <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} m="10">
              Clubs de La Liga
            </Text>
          </Center>
          <TableClub clubsLiga={clubsLiga}/>
        </Grid>
      </Center>
    </Box>
  );
};

export default ClubsPage;
