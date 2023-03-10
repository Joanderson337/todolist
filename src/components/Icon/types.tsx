import { ReactComponent as X } from './svg/close-icon.svg';
import { ReactComponent as Close } from './svg/icon-close.svg';
import { ReactComponent as Back } from './svg/voltar.svg';
import { ReactComponent as LogIn } from './svg/log-in.svg';
import { ReactComponent as User } from './svg/user.svg';
import { ReactComponent as Check } from './svg/check.svg';


const IconsTypes = {
  x : X,
  close: Close,
  back : Back,
  login: LogIn,
  user: User,
  check: Check,
};

export default IconsTypes;

export type IconName =
  | 'x'
  | 'close'
  | 'back'
  | 'login'
  | 'user'
  | 'check'




