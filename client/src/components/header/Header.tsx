import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image } from '@chakra-ui/react';

import Logo from '../icons/Logo.png';
import Close from '../icons/Close.png';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlicer';
import { initClubs } from '../../store/clubs/clubsSlicer';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={'#319795'}
      color={['white', 'white', 'primary.700', 'primary.700']}
    >
      <Link to="/clubs" replace>
        <Image boxSize="60px" src={Logo} cursor="pointer" />
      </Link>
      <Image
        boxSize="40px"
        mr='60px'
        src={Close}
        cursor="pointer"
        onClick={() => {
          dispatch(initClubs())
          dispatch(logout());
        }}
      />
    </Flex>
  );
};

export default Header;
