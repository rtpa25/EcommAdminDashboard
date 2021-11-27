/** @format */

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { productRows } from '../dummyData';

const Container = styled.div`
  flex: 4;
`;
const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;
const ProductListImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.625rem;
`;
const ProductListEditButton = styled.button`
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

const ProductListDeleteButton = styled(DeleteOutline)`
  color: #7e0000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: red;
  }
`;

const UserList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
    console.log(data);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem className='productListItem'>
            <ProductListImg
              className='productListImg'
              src={params.row.img}
              alt=''
            />
            {params.row.name}
          </ProductListItem>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <ProductListEditButton className='productListEdit'>
                Edit
              </ProductListEditButton>
            </Link>
            <ProductListDeleteButton
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
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
