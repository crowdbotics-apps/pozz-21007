import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings123916Navigator from '../features/Settings123916/navigator';
import UserProfile123909Navigator from '../features/UserProfile123909/navigator';
import Settings123908Navigator from '../features/Settings123908/navigator';
import Settings123906Navigator from '../features/Settings123906/navigator';
import SignIn2123904Navigator from '../features/SignIn2123904/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings123916: { screen: Settings123916Navigator },
UserProfile123909: { screen: UserProfile123909Navigator },
Settings123908: { screen: Settings123908Navigator },
Settings123906: { screen: Settings123906Navigator },
SignIn2123904: { screen: SignIn2123904Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
