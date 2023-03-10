import { auth } from '@/config/firebase.config';
import { signOut } from 'firebase/auth';
import { Icon } from '../Icon';
import { ContainerHeader } from './styles';

export function Close(){
  return(
    <ContainerHeader>
      <button type="button" onClick={() => signOut(auth)}>
        <Icon data-testid="close-icon" name='close' />
      </button>
    </ContainerHeader>
  );
}
