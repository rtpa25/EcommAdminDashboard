/** @format */

import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';

const Container = styled.div`
  margin-top: 1rem;
`;

function App() {
  return (
    <div>
      <Topbar />
      <Container className='flex'>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
}

export default App;
