//Página que muestra los detalles de un Club

import React from 'react';
import { useSelector } from 'react-redux';
import { club } from '../store/clubdet/clubdetSlicer';
import { Box, Center, SimpleGrid, Spinner, Text, useColorMode } from '@chakra-ui/react';
import Header from '../components/header/Header';
import { getDate } from '../hooks/utils';
import ItemPlayer from '../components/clubdet/ItemPlayer';
import { IPlayer } from '../types/IClubs';

const ClubPage = () => {
  const clubLiga = useSelector(club);
  const {colorMode} = useColorMode()

  return (
    <Box bg={colorMode==='light'?'brand.greenlight':'brand.grey'}
         minHeight="100vh"
         color={colorMode==='light'?'brand.green':'brand.greenlight'} 
         pb={20}>
      <Header />
      {clubLiga ? (
        <div>
          {' '}
          <Center>
            <Text fontSize={{ base: '18px', md: '24px', lg: '40px' }} mt="5">
              {clubLiga?.name}
            </Text>
            <br />
          </Center>
          <Center>
            <Text fontSize={{ base: '16px', md: '18px', lg: '30px' }} mt="0">
              {getDate(clubLiga.foundationDate)}
            </Text>
          </Center>
          <SimpleGrid
            spacing={4}
            m="10"
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {clubLiga.players &&
              clubLiga.players.length > 0 &&
              clubLiga.players.map((player: IPlayer) => {
                return <ItemPlayer key={player.id} player={player} />;
              })}
          </SimpleGrid>
        </div>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </Box>
  );
};

export default ClubPage;
