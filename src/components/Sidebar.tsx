/** @format */

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  top: 3.5rem;
`;

const Wrapper = styled.div``;
const Menu = styled.div`
  margin-bottom: 0.625rem;
`;
const Title = styled.h3``;
const List = styled.ul``;
const ListItem = styled.li`
  padding: 0.625rem;
  cursor: pointer;
  display: flex;
  border-radius: 1.25rem;
  align-items: center;
  &:hover {
    background-color: rgb(236, 236, 255);
  }
  &:active {
    background-color: rgb(236, 236, 255);
  }
`;

const Sidebar = () => {
  return (
    <Container className='sticky bg-gray-50'>
      <Wrapper className='p-5 text-gray-700'>
        <Menu>
          <Title className='text-xl text-gray-500'>Dashboard</Title>
          <List className='p-1.5 text-lg'>
            <ListItem>
              <LineStyle style={{ fontSize: 30 }} className='mr-2' />
              Home
            </ListItem>
            <ListItem>
              <Timeline style={{ fontSize: 30 }} className='mr-2' />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{ fontSize: 30 }} className='mr-2' />
              Sales
            </ListItem>
          </List>
          <Title className='text-xl text-gray-500'>Quick Menu</Title>
          <List className='p-1.5 text-lg'>
            <ListItem>
              <PermIdentity style={{ fontSize: 30 }} className='mr-2' />
              Users
            </ListItem>
            <ListItem>
              <Storefront style={{ fontSize: 30 }} className='mr-2' />
              Products
            </ListItem>
            <ListItem>
              <AttachMoney style={{ fontSize: 30 }} className='mr-2' />
              Transactions
            </ListItem>
            <ListItem>
              <BarChart style={{ fontSize: 30 }} className='mr-2' />
              Reports
            </ListItem>
          </List>
          <Title className='text-xl text-gray-500'>Notifications</Title>
          <List className='p-1.5 text-lg'>
            <ListItem>
              <MailOutline style={{ fontSize: 30 }} className='mr-2' />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed style={{ fontSize: 30 }} className='mr-2' />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline style={{ fontSize: 30 }} className='mr-2' />
              Messages
            </ListItem>
          </List>
          <Title className='text-xl text-gray-500'>Staff</Title>
          <List className='p-1.5 text-lg'>
            <ListItem>
              <WorkOutline style={{ fontSize: 30 }} className='mr-2' />
              Manage
            </ListItem>
            <ListItem>
              <Timeline style={{ fontSize: 30 }} className='mr-2' />
              Analytics
            </ListItem>
            <ListItem>
              <Report style={{ fontSize: 30 }} className='mr-2' />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
