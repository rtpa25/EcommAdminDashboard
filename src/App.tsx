/** @format */

import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';

const Container = styled.div`
  margin-top: 1rem;
`;

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Container className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
