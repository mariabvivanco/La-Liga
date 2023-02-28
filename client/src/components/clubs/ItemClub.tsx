//Componente con los detalles de un club. Es un item de la tabla
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'


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
import { clubdetRequest } from '../../store/clubdet/clubdetSlicer';
import imagFavorite from '../../components/icons/Favorite.png';
import { getDate } from '../../hooks/utils';

import './clubs.css'

interface Props {
  club: IClub;
}

const ItemClub: React.FC<Props> = ({ club }) => {
  const isMobile = screen.width < 760;
  const navigate = useNavigate();
  const tokenAuth = useSelector(token);
  const dispatch = useDispatch();
  

  const [fav, setFav] = useState(club.favorite);

  const changeFavorite = async () => {
    try {
      const response = await updateFavorite(club.id, !fav, tokenAuth);

      if (response.id) setFav(response.favorite);
    } catch (error) {
        console.error('Ocurrió un error al intentar cambiar favorito');
    }
  };

  const goClub =()=> {
    dispatch(clubdetRequest(club.id))
    navigate('/club/'+club.id)
  }

  return (
    
    <Tr className='image_overlay'  >
      <Td   >
        <Avatar src={club.avatar} cursor='pointer' onClick={()=>{goClub()}} />
      </Td>
      <Td onClick={()=>{goClub()}}>
        <HStack>
          <Box>{fav && <Image src={imagFavorite} boxSize="10px"></Image>}</Box>
          <Box>{club.name}</Box>
        </HStack>
        {isMobile && (
          <HStack>
            <Box onClick={()=>{goClub()}}>
              {
                <Center>
                  {getDate(club.foundationDate)}
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
          <Center onClick={()=>{goClub()}}>
            {getDate(club.foundationDate)}
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
