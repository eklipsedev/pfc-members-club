import { getCurrentUser } from '../utils';

export const sendEmailVerification = () => {
  const user = getCurrentUser();

  if (user) {
    return user.sendEmailVerification();
  }
};
