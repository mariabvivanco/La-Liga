import React from 'react';

import {
  Card,  
  CardBody,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';

import { IPlayer } from '../../types/IClubs';
import ItemStats from './ItemStats';

interface Props {
  player: IPlayer;
}

const ItemPlayer: React.FC<Props> = ({ player }) => {
    return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={player.avatar}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">
            {player.firstName + ' ' + player.lastName}
          </Heading>
          <ItemStats player={player}/>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ItemPlayer;
