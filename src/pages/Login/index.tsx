import { useForm } from 'react-hook-form';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
} from './styled';

import { Loading } from '@/components/Loading';
import { UserContext } from '@/context/user.context';
import { CustomInput } from '@/components/CustomInput';
import { ErrorMessage } from '@/components/ErrorMessage';
import { CustomButton } from '@/components/CustomButton';
import { Icon } from '@/components/Icon';

import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../config/firebase.config';


interface ILoginForm {
  email: string;
  password: string;
}

export function Login() {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>();

  const [isLoading, setIsLoading] = useState(false);

  const { isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated]);

  const handleSignUp = () => {
    navigate('/signUp');
  };

  function saveDataUser(nameUser: string | any) {
    localStorage.setItem('nameUser', nameUser);
  }

  const handleSubmitPress = async (data: ILoginForm) => {
    try {
      setIsLoading(true);

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const nameUser = userCredentials.user.email;
      saveDataUser(nameUser);
    } catch (error) {
      toast.error('algo deu errado, tente novamente!');
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' });
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {isLoading && <Loading />}
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Bem-vindo(a)!</LoginHeadline>

          <LoginInputContainer>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="E-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
            />

            {errors?.email?.type === 'required' && (
              <ErrorMessage>O e-mail é obrigatório.</ErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <ErrorMessage>O e-mail não foi encontrado.</ErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Por favor, insira um e-mail válido.</ErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Password"
              type="password"
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}

            {errors?.password?.type === 'mismatch' && (
              <ErrorMessage>A senha é inválida.</ErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>
            <Icon name="login" size={16} />
            Login
          </CustomButton>
          <CustomButton onClick={handleSignUp}>
            <Icon name="user" size={17} />
            Criar conta
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}
