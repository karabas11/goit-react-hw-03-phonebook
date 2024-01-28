import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
`;
export const FormLabel = styled.label`
  padding-bottom: 10px;
  margin-left: 10px;
  font-size: 20px;
`;
export const FormInput = styled.input`
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

export const FormButton = styled.button`
  width: 100px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 20px;
  color: #82909e;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  transition: all 0.8s;
  margin-left: 10px;

  &:hover {
    background-color: #00d4ff;
    color: #efff00;
  }
`;
