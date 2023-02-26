import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import { IPlayer } from '../../types/IClubs';

interface Props {
  player: IPlayer;
}

const ItemStats: React.FC<Props> = ({ player }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Temporada</Th>
            <Th>Goles</Th>
            <Th isNumeric>Pases</Th>
            <Th isNumeric>Score</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>Pasada</Td>
            <Td>{player.stats[0].kicksToGoal}</Td>
            <Td>{player.stats[0].goalPasses}</Td>
            <Td>{player.stats[0].score}</Td>
          </Tr>
          <Tr>
            <Td>Actual</Td>
            <Td>{player.stats[1].kicksToGoal}</Td>
            <Td>{player.stats[1].goalPasses}</Td>
            <Td>{player.stats[1].score}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ItemStats;
