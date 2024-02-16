import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';

import {
  handleOpenChangeEmailModal,
  handleOpenUpdatePasswordModal,
  handleSaveProfilePic,
  handleSetProfileData,
  handleUpdateEmail,
  handleUpdatePassword,
  handleUpdateUserProfile,
} from './account/profile/eventhandlers';
import { handleComboBox } from './account/users/comboBox';
import {
  handleCreateOrgUser,
  handleDeleteOrgUser,
  handleLoadMoreUsers,
  handleRenderUsers,
  handleSearchUsers,
  handleUpdateOrgUser,
} from './account/users/eventhandlers';
import { handleSettingFilters } from './filters/filters';
import {
  handleRenderSavedItems,
  handleSaveItemClick,
  handleUnsaveItemClick,
} from './saveForLater/eventhandlers';
import { setSavedItemsObserver } from './saveForLater/setSavedItemsObserver';
import { updateSavedCount } from './saveForLater/updateSavedCount';
import {
  handleForgotPassword,
  handleLoginClick,
  handleLogoutClick,
  handleResetPassword,
} from './services/firebase/auth/eventHandlers';
import { togglePasswordVisibility } from './services/firebase/auth/loginWithEmail';
import { showLogoutMessage } from './services/firebase/auth/logout';
import app from './services/firebase/firebase-config';
import { getCurrentUser, handleAuthElements } from './services/firebase/utils';
import { connectToShopify } from './services/shopify/multipass';
import {
  handleLessonButtonClick,
  handleSetAsideData,
  handleSetCourseProgressCards,
  handleSetDropdowns,
  handleSetLessonItems,
  handleSetModuleDropdowns,
} from './university/eventhandlers';
import { handleToggleDropdowns } from './utils/dropdown';

// Initialize Firestore with persistence
initializeFirestore(app, {
  localCache: persistentLocalCache({
    synchronizeTabs: true,
    maxAge: 60 * 60 * 1000,
  }),
});

(async () => {
  await getCurrentUser();
  handleAuthElements();

  handleLoginClick();
  togglePasswordVisibility();
  handleLogoutClick();
  showLogoutMessage();
  handleForgotPassword();
  handleResetPassword();

  // handle filters
  handleSettingFilters();

  // handle university
  handleSetCourseProgressCards();
  handleSetModuleDropdowns();
  handleSetDropdowns();
  handleSetLessonItems();
  handleSetAsideData();
  handleLessonButtonClick();

  // handle Shopify Multipass
  connectToShopify();

  // handle save for later
  handleRenderSavedItems();
  setSavedItemsObserver();
  updateSavedCount();
  handleSaveItemClick();
  handleUnsaveItemClick();

  // handle user profile
  handleSetProfileData();
  handleUpdateUserProfile();
  handleSaveProfilePic();
  handleUpdateEmail();
  handleUpdatePassword();
  handleOpenChangeEmailModal();
  handleOpenUpdatePasswordModal();

  // handle admin user actions
  handleRenderUsers();
  handleSearchUsers();
  handleCreateOrgUser();
  handleUpdateOrgUser();
  handleDeleteOrgUser();
  handleComboBox();
  handleLoadMoreUsers();

  handleToggleDropdowns();
})();
