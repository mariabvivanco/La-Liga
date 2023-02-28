//Buscador de la página de clubs"

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '@chakra-ui/icons';

import { Stack, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { useDebounce } from '../../hooks/utils';
import { setSearch } from '../../store/clubs/clubsSlicer';

const SearchClub = () => {
  const [tempSearch, setTempSearch] = useState('');
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(500, tempSearch);

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch]);

  const searchValueChangeHandler = (val: string) => {
    setTempSearch(val);
  };

  return (
    <Stack spacing={4}>
      <InputGroup cursor={'pointer'}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="#319795" />}
        />
        <Input
          type="tel"
          placeholder="Busca por nombre de Club"
          onChange={(event) => {
            const temp = event.target.value;
            searchValueChangeHandler(temp);
          }}
        />
      </InputGroup>
    </Stack>
  );
};

export default SearchClub;
