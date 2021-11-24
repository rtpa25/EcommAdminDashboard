/** @format */

import { Visibility } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 1.25rem;
  margin-right: 1.25rem;
  margin-left: 1.25rem;
`;
const Title = styled.span`
  font-size: 1.375rem;
  font-weight: 600;
`;
const List = styled.ul``;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0;
`;
const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span`
  font-weight: 600;
`;
const UserTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0.625rem;
  padding: 0.438rem 0.625rem;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const Icon = styled(Visibility)`
  font-size: 16px !important;
  margin-right: 5px;
`;

const WidgetSm = () => {
  return (
    <Container>
      <Title>New Users</Title>
      <List>
        <ListItem>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Developer</UserTitle>
          </User>
          <Button>
            <Icon />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Developer</UserTitle>
          </User>
          <Button>
            <Icon />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Developer</UserTitle>
          </User>
          <Button>
            <Icon />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Developer</UserTitle>
          </User>
          <Button>
            <Icon />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Developer</UserTitle>
          </User>
          <Button>
            <Icon />
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};

export default WidgetSm;
