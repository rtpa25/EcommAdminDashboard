/** @format */

import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import { productData } from '../dummyData';
import { Publish } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
  padding: 1.25rem;
`;
const ProductTitleContainer = styled.div``;
const ProductTitle = styled.h1``;
const ProductAddButton = styled.button`
  width: 5rem;
  padding: 0.313rem;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;
const ProductTop = styled.div`
  display: flex;
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 1.25rem;
  margin: 1.25rem;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfoImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25rem;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const ProductInfoBottom = styled.div`
  margin-top: 0.625rem;
`;
const ProductInfoItem = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span`
  font-size: 1.2rem;
`;
const ProductInfoValue = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.25rem;
    margin-bottom: 0.625rem;
    color: gray;
  }
  input {
    height: 2.5rem;
    margin-bottom: 0.625rem;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  select {
    margin-bottom: 0.625rem;
    height: 2.5rem;
  }
`;
const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;
const ProductUploadImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;
const ProductButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  background-color: teal;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;
const Product = () => {
  return (
    <Container>
      <ProductTitleContainer className='flex items-center justify-between'>
        <ProductTitle className='text-3xl font-semibold'>Product</ProductTitle>
        <Link to='/newProduct'>
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart
            data={productData}
            dataKey='Sales'
            title='Sales Performance'
            grid={undefined}
          />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImage
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <ProductName className='text-xl '>Apple Airpods</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>5123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <label>Product Name</label>
            <input type='text' placeholder='Apple AirPod' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};

export default Product;
