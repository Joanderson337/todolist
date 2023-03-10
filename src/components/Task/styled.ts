import Colors from '@/styles/theme';
import styled from 'styled-components';

export const TodoItem = styled.li`
  list-style: none;
`;

export const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TaskWrapper = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color:  ${Colors.text.white};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  margin-top: 0.75rem;
  flex: 1;
  border-radius: 8px;
  color: ${Colors.text.dark};

  @media (max-width: 800px) {
    width: 85%;
  }
`;

export const TaskButton = styled.button`
  background: transparent;
  color: ${Colors.color.white_200};
  border: 0;
  line-height: 0;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    color: ${Colors.color.red_200};
  }
`;

export const TaskCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${Colors.color.blue_100};
  border-radius: 16px;
  background: transparent;
  cursor: pointer;
  position: relative;

  &:checked::before {
    display: flex;
    justify-content: center;
    position: absolute;
    right: -3px;
    top: -5px;
    content: '\2713';
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    border: 2px solid ${Colors.color.blue_100};
    color: ${Colors.color.white_200};
    background: ${Colors.color.violet};
  }

  &:checked + label + p {
    color: ${Colors.color.gray_200};
    text-decoration: underline !important;
  }
`;
