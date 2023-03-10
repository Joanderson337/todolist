import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginHeadline = styled.p`
  margin-bottom: 65px;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #2E3E5C;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45rem;
`;


export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

    @media (max-width: 600px) {
    width: 80%;
  }

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
