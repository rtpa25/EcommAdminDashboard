/** @format */

import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';

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
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
