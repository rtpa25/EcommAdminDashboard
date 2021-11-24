/** @format */

import { NotificationsNone, Language, Settings } from '@material-ui/icons';
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
  return (
    <Container className='w-full h-14 bg-white'>
      <Wrapper className='h-full flex justify-between items-center'>
        <TopLeft>
          <Logo className='font-semibold text-4xl cursor-pointer text-blue-900'>
            Nyka Admin.
          </Logo>
        </TopLeft>
        <TopRight className='flex justify-between items-center'>
          <IconContainer className='relative'>
            <NotificationsNone style={{ fontSize: 30 }} />
            <IconBadge className='absolute flex justify-center items-center text-s'>
              2
            </IconBadge>
          </IconContainer>
          <IconContainer className='relative'>
            <Language style={{ fontSize: 30 }} />
            <IconBadge className='absolute flex justify-center items-center text-s'>
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
      </Wrapper>
    </Container>
  );
};

export default Topbar;
