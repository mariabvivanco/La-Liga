//Header que aparece en todas las vistas menos en la de login

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, Stack, useColorMode } from '@chakra-ui/react';

import Logo from '../icons/Logo.png';
import Close from '../icons/Close.png';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlicer';
import { initClubs } from '../../store/clubs/clubsSlicer';
import ModalConfirm from '../modals/ModalConfirm';
import ThemeChange from './ThemeChange';
import User from '../icons/User';

const Header = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const [showModal, setShowModal] = useState(false);

  const logoutConfirm = () => {
    dispatch(initClubs());
    dispatch(logout());
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={colorMode === 'light' ? 'brand.green' : 'brand.greenlight'}
    >
      <Link to="/clubs" replace>
        <Image boxSize="60px" src={Logo} cursor="pointer" />
      </Link>
      <Stack spacing={8} direction="row">
        <ThemeChange />
        <Box   cursor="pointer"
            onClick={() => {
              setShowModal(true);
            }}>
          <User  color={colorMode === 'light' ? 'white' : 'teal'}
           
          />
        </Box>
     
      </Stack>

      <ModalConfirm
        show={showModal}
        setShow={setShowModal}
        title="Alerta"
        text="Está seguro que desea cerrar sesión"
        act={logoutConfirm}
      />
    </Flex>
  );
};

export default Header;
