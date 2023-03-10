import Colors from '@/styles/theme';
import styled from 'styled-components';

export const TaskForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.857rem;
  gap: 0.857rem;

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 50%;
    position: absolute;
    top: 10rem;
  }

  @media (max-width: 800px) {
    form {
      width: 85%;
    }
  }
`;

export const ContentInput = styled.input`
  width: 44.3%;
  background-color:  ${Colors.text.white};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  flex: 1;
  border-radius: 8px;
  color: ${Colors.text.dark};
  font-weight: bold;
  font-size: 1rem;
  padding: 1.35rem;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

export const ButtonTask = styled.button`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  background-color: ${Colors.color.green};
  color: ${Colors.color.white_200};
  padding: 1rem;
  gap: 0.5em;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s;

  @media (max-width: 800px) {
    padding: 0.7rem;
  }
`;

export const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 8rem;
`;

export const Overview = styled.section`
  width: 50%;
  display: flex;
  margin-top: 3.5rem;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width: 800px) {
    width: 76%;
  }
`;

export const Counter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  & p {
    color: ${Colors.color.blue_100};
    font-weight: bold;
  }

  & span {
    background: #333333;
    padding: 0.125rem 0.5rem;
    border-radius: 1rem;
    font-weight: bold;
    color: ${Colors.color.white_200};
  }
`;

export const CounterTwo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  & p {
    color: ${Colors.color.violet};
    font-weight: bold;
  }

  & span {
    background:  ${Colors.color.gray_100};
    padding: 0.125rem 0.5rem;
    border-radius: 1rem;
    font-weight: bold;
    color: ${Colors.color.white_200};
  }
`;

export const NoTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 244px;
  border-radius: 8px;
  margin-top: 1.5rem;
  padding: 64px;
  gap: 1rem;
  color: ${Colors.color.gray_100};
  font-weight: bold;

  & span {
    font-weight: normal;
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;
