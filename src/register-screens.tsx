import { RegisterComponent } from './navigation/rnn/register-component';
import { HOME_SCREEN } from './screens/home/const';

export const registerBottomTabScreens = () => {
	RegisterComponent(HOME_SCREEN.name, require('./screens/home/Home').default);
};
