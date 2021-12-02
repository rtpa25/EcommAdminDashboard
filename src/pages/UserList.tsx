/** @format */

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Container = styled.div`
  flex: 4;
`;
const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

const EditButton = styled.button`
  padding: 0.75rem;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 1.25rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #3bb077;
  }
`;

const DeleteButton = styled(DeleteOutline)`
  color: #7e0000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: red;
  }
`;

const UserList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await axios.get('http://localhost:5000/api/v1/getAllUsers', {
        withCredentials: true,
      });
      setData(res.data.users);
    };
    getAllUsers();
  }, []);

  const handleDelete = async (id: string) => {
    //Order of the two lines is important
    await axios.delete(`http://localhost:5000/api/v1/deleteUser/${id}`, {
      withCredentials: true,
    });
    setData(data.filter((item) => item?._id !== id));
  };

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 180 },
    {
      field: 'user',
      headerName: 'user',
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem className='productListItem'>
            {params.row.username}
          </ProductListItem>
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
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row._id}>
              <EditButton className='userListEdit'>Edit</EditButton>
            </Link>
            <div
              onClick={() => {
                handleDelete(params.row._id);
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
        getRowId={(row) => row._id}
        rows={data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};

export default UserList;
