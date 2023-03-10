import styled from 'styled-components';
import Colors from '@/styles/theme';

export const CustomButtonContainer = styled.button`
  width: 100%;
  background: ${Colors.color.green};
  color: ${Colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.2rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  gap: 1rem;

  height: 56px;


  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const IconContainer = styled.div`
  margin-right: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
