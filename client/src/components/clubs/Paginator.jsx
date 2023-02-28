/* eslint-disable no-undef */
//Paginador de la página de Clubs

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clubs, limit, setOffset } from '../../store/clubs/clubsSlicer';
import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SliderThumb,
  Slider,
  SliderTrack,
  SliderFilledTrack,
} from '@chakra-ui/react';

const Paginator = () => {
  const dispatch = useDispatch();
  const limitClub = useSelector(limit);
  const clubsLiga = useSelector(clubs);

  const handleChange = (value) => {
    setValue(value);
    dispatch(setOffset(value-1));
  };

  const [min, setMin] = useState(clubsLiga.total > 0 ? 1 : 0);
  const [max, setMax] = useState(clubsLiga.total % limitClub === 0
    ? Math.floor(clubsLiga.total / limitClub)
    : Math.floor(clubsLiga.total / limitClub + 1) );
  const [value, setValue] = useState(clubsLiga.total > 0 ? 1 : 0);

  useEffect(() => {
    setMin(clubsLiga.total > 0 ? 1 : 0)
    setMax(clubsLiga.total % limitClub === 0
      ? Math.floor(clubsLiga.total / limitClub)
      : Math.floor(clubsLiga.total / limitClub + 1))
    setValue(clubsLiga.total > 0 ? 1 : 0)
  
  }, [limitClub, clubsLiga.total])
  

  return (
    <Flex>
      <NumberInput
        min={min}
        max={max}
        maxW="100px"
        mr="5rem"
        value={value}
        onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        colorScheme="green"
      >
        <SliderTrack min={min} max={max}>
          <SliderFilledTrack min={min} max={max} />
        </SliderTrack>
        <SliderThumb
          fontSize="sm"
          boxSize="32px"
          children={value}
          min={min}
          max={max}
        />
      </Slider>
    </Flex>
  );
};

export default Paginator;
