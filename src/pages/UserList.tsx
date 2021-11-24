/** @format */

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { userRows } from '../dummyData';

const Container = styled.div`
  flex: 4;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.625rem;
`;

const EditButton = styled.button`
  border: none;
  border-radius: 0.625rem;
  padding: 0.313rem 0.625rem;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 1.25rem;
`;

const DeleteButton = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
    console.log(data);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, type: 'number' },
    { field: 'username', headerName: 'Username', width: 130, type: 'string' },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <Image className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </User>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <EditButton className='userListEdit'>Edit</EditButton>
            </Link>
            <div
              onClick={() => {
                handleDelete(params.row.id);
              }}>
              <DeleteButton />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};

export default UserList;
