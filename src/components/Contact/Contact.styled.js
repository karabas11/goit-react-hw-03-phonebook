import styled from 'styled-components';

export const ContactItem = styled.li`
  display: inline-flex;
  padding-bottom: 10px;
  /* margin: 10px; */
`;

export const ContactDelitButton = styled.button`
  width: 80px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 20px;
  color: #82909e;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  transition: transform 250vs linear;
  margin: 0 auto 0;

  &:hover {
    background-color: red;
    color: #efff00;
    transform: scale(1, 1);
  }
`;
