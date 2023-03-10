import RingLoader from 'react-spinners/RingLoader';
import { LoadingContainer } from './styled';

export interface ILoadingProps {
  message?: string;
}

export function Loading({ message }: ILoadingProps) {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <RingLoader size={80} color={'#1FCC79'} />
    </LoadingContainer>
  );
}
