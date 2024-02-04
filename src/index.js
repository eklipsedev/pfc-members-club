import {
  handleOpenChangeEmailModal,
  handleOpenUpdatePasswordModal,
  handleSaveProfilePic,
  handleSetProfileData,
  handleUpdateEmail,
  handleUpdatePassword,
  handleUpdateUserProfile,
} from './account/profile/eventhandlers';
import {
  handleCreateOrgUser,
  handleDeleteOrgUser,
  handleRenderUsers,
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
  forgotPassword,
  handleAuthListener,
  resetPassword,
  showLogoutMessage,
  togglePasswordVisibility,
} from './services/firebase/auth';
import { handleLoginClick, handleLogoutClick } from './services/firebase/auth/eventHandlers';
//import { toggleDropdown } from './utils/dropdown';
//import { handleUnversity } from './university';
import { connectToShopify } from './services/shopify/multipass';
import {
  handleLessonButtonClick,
  handleSetAsideData,
  handleSetCourseProgressCards,
  handleSetDropdowns,
  handleSetLessonItems,
  handleSetModuleDropdowns,
} from './university/eventhandlers';

handleLoginClick();
togglePasswordVisibility();
handleLogoutClick();
showLogoutMessage();
handleAuthListener();
forgotPassword();
resetPassword();

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
handleCreateOrgUser();
handleUpdateOrgUser();
handleDeleteOrgUser();

//toggleDropdown();
