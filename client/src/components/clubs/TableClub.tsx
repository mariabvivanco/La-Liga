import React from 'react';

import {
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import { IClubs } from '../../types/IClubs';
import ItemClub from './ItemClub';

interface Props {
  clubsLiga: IClubs;
}

const TableClub: React.FC<Props> = ({ clubsLiga }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          Mostrados {clubsLiga.results.length} clubs de {clubsLiga.total}
        </TableCaption>

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
  );
};

export default TableClub;
