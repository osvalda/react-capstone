import './App.css';
import Main from './components/Main';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <Main>

          </Main>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
