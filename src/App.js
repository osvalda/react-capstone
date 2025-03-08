import './App.css';
import Main from './components/Main';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/AlertContext";
import Alert from './components/Alert';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AlertProvider>
          <Layout>
              <Alert />
          </Layout>
        </AlertProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
