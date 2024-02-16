import { httpsCallable } from 'firebase/functions';

import { functions } from '../../services/firebase/firebase-config';
import { checkPermissions } from './utils';
import { getUsers, setUsers } from './variables';

export const deleteOrgUser = async (userToDeleteId) => {
  try {
    checkPermissions();

    const deleteOrgUserFunction = httpsCallable(functions, 'deleteOrgUser');

    const userData = {
      userId: userToDeleteId,
    };

    const result = await deleteOrgUserFunction(userData);

    if (!result.data.success) {
      return { success: false, message: result.data.message };
    }

    const users = getUsers();

    const filteredUsers = users.filter((user) => user.userId !== userToDeleteId);

    setUsers(filteredUsers);

    return { success: true, message: result.data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
