import { Center, Text, Grid, Image, GridItem } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginComp from '../components/login/LoginComp';
import ModalError from '../components/modals/ModalError';
import { loginRequest, status } from '../store/auth/authSlicer';

const LoginPage = () => {
  const dispatch = useDispatch();

  const statusLogin = useSelector(status);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [change, setChange] = useState(false);

  const onSubmit = () => {
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (password !== '' && email !== '') onSubmit();
  }, [change]);

  useEffect(() => {
    if (statusLogin==='error'&&!showModal) setShowModal(true);
  }, [statusLogin]);

  return (
    <Center bg="#F0F6F5" h="100vh" color="#319795">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} >
        <GridItem> 
          <Center>
          <Image
          boxSize='100px'
          src='/public/assets/images/liga'          
        />
        </Center>
        <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} m="10">Bienvenido a La Liga</Text></GridItem>
        <GridItem> 
          <LoginComp setEmailLogin={setEmail} setPasswordLogin={setPassword} isLoading={statusLogin==='pending'} setChange={setChange} change={change}/>
        </GridItem>
     
      
       </Grid>
       <ModalError 
          title="Lo sentimos" 
          text="Sus  credenciales son incorrectas, por favor revise las mismas"
          show ={showModal}
          setShow = {setShowModal}/>
    </Center>
  );
};

export default LoginPage;
