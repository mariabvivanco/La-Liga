import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clubsRequest } from '../store/clubs/clubsSlicer';
import { clubs } from '../store/clubs/clubsSlicer';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Box,
  Center,
  Grid,
  Text,
} from '@chakra-ui/react';
import ItemClub from '../components/clubs/ItemClub';

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
    <Box bg="#F0F6F5" h="100vh" color="#319795">
      <Center>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)' }}>
          <Center>
            <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} m="10">
              Clubs de La Liga
            </Text>
          </Center>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                Mostrados {clubsLiga.results.length} clubs de {clubsLiga.total}
              </TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Nombre</Th>
                  <Th>Fecha de Fundado</Th>
                  <Th>Favorito</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clubsLiga &&
                  clubsLiga.results.length > 0 &&
                  clubsLiga.results.map((club) => {
                    return <ItemClub key={club.name} club={club} />;
                  })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Grid>
      </Center>
    </Box>
  );
};

export default ClubsPage;
