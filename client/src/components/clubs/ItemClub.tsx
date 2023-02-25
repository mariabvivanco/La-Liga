import React, {useState} from 'react';

import { Tr, Td, Avatar, Image, HStack, Box, Switch, Center } from '@chakra-ui/react';

import { IClub } from '../../types/IClubs';
import imagFavorite from '../../components/icons/Favorite.png'

interface Props {
   club:IClub
  }

const ItemClub: React.FC<Props>  = ({club}) => {
  const date = new Date (club.foundationDate)
  const [clubFavorite, setClubFavorite] = useState(club.favorite)
  return (
    <Tr borderBottom='red'>
      <Td><Avatar  src={club.avatar} /></Td>
      <Td>
        <HStack>
          <Box>{clubFavorite&&<Image src={imagFavorite} boxSize='10px' ></Image>}</Box>
          <Box>{club.name}</Box>
        </HStack>
      </Td>
     
      <Td><Center>{date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()}</Center></Td>
      <Td> <Switch id='isChecked' colorScheme='teal' isChecked={clubFavorite} onChange={()=>{setClubFavorite(!clubFavorite)}}/></Td>
      
    </Tr>
  );
};

export default ItemClub;