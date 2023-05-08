import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';

const globalStyle = {
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "'Archivo Narrow', sans-serif",
    fontWeight: "bold",
  },
  body: {
    fontFamily: "Consolas, monospace",
  },
};

const theme = extendTheme({
  styles: {
    global: globalStyle,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
