import { UserContext } from '@/context/user.context';
import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../Loading';



interface IAuthenticationGuard {
  children: ReactNode;
}

export const AuthenticationGuard = ({ children }: IAuthenticationGuard) => {
  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/');
      }, 4000);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    );
  }

  return <>{children}</>;
};
