import { Button, useColorMode } from "@chakra-ui/react";


const ThemeChange = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button colorScheme="teal"
            onClick={toggleColorMode}>
      Modo {colorMode === 'light' ? 'Oscuro' : 'Claro'}
    </Button>
  );
};

export default ThemeChange;
