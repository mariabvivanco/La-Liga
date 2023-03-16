import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import store from './store/index';
import { RoutesApp } from './routes';

import { config, colors } from './style';

const App = () => {
  const theme = extendTheme({
    config,
    colors,
  });

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RoutesApp />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
