import styled from 'styled-components';
import Colors from '@/styles/theme';

type ICustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<ICustomInputContainerProps>`
  border: 1px solid #D0DBEA;
  width: 100%;
  background-color: ${Colors.text.white};
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  border-radius: 3.2rem;
  color: ${Colors.text.dark};

  Height: 56px;


  border: ${(props) => (props.hasError ? `2px solid ${Colors.error}` : 'none')};
  &::placeholder {
    color: ${(props) =>
    props.hasError ? Colors.error : Colors.input.placeholder};
  }
  &:focus {
    outline: ${(props) =>
    props.hasError ? 'none' : `2px solid ${Colors.input.placeholder}`};
  }
`;
