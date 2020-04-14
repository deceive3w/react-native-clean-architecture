import NavigatorImpl from '../navigation/rnn/Navigator';
import Navigation from '../navigation/Navigation';
import { tabs } from '../register-tabs';
import { registerBottomTabScreens } from '../register-screens';

// startupNavigation(() => {
// 	//TODO: Callback
// });

new Navigation(new NavigatorImpl());
registerBottomTabScreens();
Navigation.getNavigator().setupBottomTab(tabs);
// Navigation.getNavigator().init(() => {
// 	Navigation.getNavigator().setupBottomTab(tabs);
// });
