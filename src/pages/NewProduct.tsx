/** @format */

import styled from 'styled-components';

const Container = styled.div`
  flex: 4;
  margin-left: 5rem;
`;
const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
  margin-top: 10px;
`;
const AddProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    border: 1px solid gray;
  }
  select {
    padding: 10px;
  }
`;

const AddProductButton = styled.button`
  border-radius: 5px;
  padding: 1rem;
  width: 10rem;
  background-color: teal;
  color: white;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: #00c3c3;
  }
`;

const NewProduct = () => {
  return (
    <Container>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm>
        <AddProductItem>
          <label>Image</label>
          <input type='file' id='file' />
        </AddProductItem>
        <AddProductItem>
          <label>Name</label>
          <input type='text' placeholder='Apple Airpods' />
        </AddProductItem>
        <AddProductItem>
          <label>Stock</label>
          <input type='text' placeholder='123' />
        </AddProductItem>
        <AddProductItem>
          <label>Active</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </AddProductItem>
        <AddProductButton>Create</AddProductButton>
      </AddProductForm>
    </Container>
  );
};

export default NewProduct;
