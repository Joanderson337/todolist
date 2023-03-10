import styled from 'styled-components';
import Colors from '../../styles/theme';

export const SignUpContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;


  @media (max-width: 600px) {
    margin-top: 0rem;
  }
`;

export const SignUpBack = styled.button`
    font-size: 1.3rem;
    font-weight: 600;
    background: transparent;
    display: flex;
    align-items: center;
    display: flex;
    gap: 0.2rem;
`;

export const SignUpHeadline = styled.p`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 6rem;
  }

  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${Colors.text.dark};
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #6c757d;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;
`;

export const SignUpInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 80%;
  }

  > p {
    margin-left: 2rem;
  }

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
