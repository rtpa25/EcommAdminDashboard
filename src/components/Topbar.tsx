/** @format */

import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import Cookies from 'js-cookie';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  padding: 0 1.25rem;
`;
const TopLeft = styled.div``;
const TopRight = styled.div``;
const Logo = styled.span``;

const IconContainer = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  color: #555;
`;
const IconBadge = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  top: -5px;
  right: -7px;
  color: #fff;
  border-radius: 50%;
  background-color: red;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 2.75rem;
  width: 2.75rem;
  cursor: pointer;
`;

const Topbar = () => {
  const token = Cookies.get('token');
  const authUserNavbar = (
    <TopRight className='flex items-center justify-between'>
      <IconContainer className='relative'>
        <NotificationsNone style={{ fontSize: 30 }} />
        <IconBadge className='absolute flex items-center justify-center text-s'>
          2
        </IconBadge>
      </IconContainer>
      <IconContainer className='relative'>
        <Language style={{ fontSize: 30 }} />
        <IconBadge className='absolute flex items-center justify-center text-s'>
          2
        </IconBadge>
      </IconContainer>
      <IconContainer className='relative'>
        <Settings style={{ fontSize: 30 }} />
      </IconContainer>
      <Avatar
        src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt=''
        className=''
      />
    </TopRight>
  );
  const tester = (
    <div>
      <span className='mr-5'>AdminEmail: 'test0@email.com'</span>
      <span>AdminPassword: 'test0123'</span>
    </div>
  );
  return (
    <Container className='w-full bg-white h-14'>
      <Wrapper className='flex items-center justify-between h-full'>
        <TopLeft>
          <Logo className='text-4xl font-semibold text-blue-900 cursor-pointer'>
            Nyka Admin.
          </Logo>
        </TopLeft>
        {token ? authUserNavbar : tester}
      </Wrapper>
    </Container>
  );
};

export default Topbar;
