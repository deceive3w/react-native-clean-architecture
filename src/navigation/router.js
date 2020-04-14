import { registerComponent } from "./rnn/register-component"
import { HOME_SCREEN } from "../screens/home/const"


export const registerBottomTabScreens = () => {
    registerComponent(HOME_SCREEN.name, require('../screens/home/home').default)
}