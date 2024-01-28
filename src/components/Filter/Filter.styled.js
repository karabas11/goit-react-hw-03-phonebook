import styled from 'styled-components';

export const FilterLabel = styled.label`
  padding-bottom: 10px;
  margin-left: 10px;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  width: 200px;
  height: 40px;
  border: 1px solid #009dff;
  border-radius: 60px;
  font-size: 16px;

  &:focus {
    background-color: #e4e9f0;
  }
`;
