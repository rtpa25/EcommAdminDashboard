/** @format */

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const ProductList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get(
        'http://localhost:5000/api/v1/getAllProducts',
        {
          withCredentials: true,
        }
      );
      setData(res.data.products);
    };
    getAllProducts();
  }, []);

  const handleDelete = async (id: number) => {
    //Order of the two lines is important
    await axios.delete(`http://localhost:5000/api/v1/deleteProduct/${id}`, {
      withCredentials: true,
    });
    setData(data.filter((item) => item?._id !== id));
  };

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem className='productListItem'>
            <ProductListImg
              className='productListImg'
              src={params.row.img.secure_url}
              alt=''
            />
            {params.row.name}
          </ProductListItem>
        );
      },
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
            <Link to={'/product/' + params.row._id}>
              <ProductListEditButton className='productListEdit'>
                Edit
              </ProductListEditButton>
            </Link>
            <ProductListDeleteButton
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
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

export default ProductList;
