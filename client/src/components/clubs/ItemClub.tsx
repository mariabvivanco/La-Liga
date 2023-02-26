import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Tr,
  Td,
  Avatar,
  Image,
  HStack,
  Box,
  Switch,
  Center,
} from '@chakra-ui/react';

import { IClub } from '../../types/IClubs';
import { updateFavorite } from '../../services/ClubsServices';
import { token } from '../../store/auth/authSlicer';
import { updateClubs } from '../../store/clubs/clubsSlicer';
import imagFavorite from '../../components/icons/Favorite.png';

interface Props {
  club: IClub;
}

const ItemClub: React.FC<Props> = ({ club }) => {
  const isMobile = screen.width < 760;
  const tokenAuth = useSelector(token);
  const dispatch = useDispatch();
  const date = new Date(club.foundationDate);

  const [fav, setFav] = useState(club.favorite);

  const changeFavorite = async () => {
    try {
      const response = await updateFavorite(club.id, !club.favorite, tokenAuth);

      if (response.id) setFav(response.favorite);
    } catch (error) {
      console.log('Ocurrió un error al intentar cambiar favorito');
    }
  };
  return (
    <Tr borderColor="blue" borderStyle="2px solid">
      <Td>
        <Avatar src={club.avatar} />
      </Td>
      <Td>
        <HStack>
          <Box>{fav && <Image src={imagFavorite} boxSize="10px"></Image>}</Box>
          <Box>{club.name}</Box>
        </HStack>
        {isMobile && (
          <HStack>
            <Box>
              {
                <Center>
                  {date.getDate() +
                    '/' +
                    date.getMonth() +
                    '/' +
                    date.getFullYear()}
                </Center>
              }
            </Box>
            <Box w="100%"></Box>
            <Box>
              <Switch
                id="isChecked"
                colorScheme="teal"
                isChecked={fav}
                onChange={() => {
                  changeFavorite();
                }}
              />
            </Box>
          </HStack>
        )}
      </Td>

      {!isMobile && (
        <Td>
          <Center>
            {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
          </Center>
        </Td>
      )}
      {!isMobile && (
        <Td>
          {' '}
          <Switch
            id="isChecked"
            colorScheme="teal"
            isChecked={fav}
            onChange={() => {
              changeFavorite();
            }}
          />
        </Td>
      )}
    </Tr>
  );
};

export default ItemClub;
