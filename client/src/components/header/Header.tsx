import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

import Logo from '../icons/Logo.png'
import Close from '../icons/Close.png'
import { useDispatch } from 'react-redux';
import { logout} from '../../store/auth/authSlicer';

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
        bg={"#319795"}
        color={["white", "white", "primary.700", "primary.700"]}
        
      >
         <Image
          boxSize='60px'
          src={Logo}  
          cursor='pointer'      
        />
        <Image
          boxSize='40px'
          src={Close}  
          cursor='pointer' 
          onClick={()=>{dispatch(logout())}}      
        />
      </Flex>
    );
}

export default Header;
