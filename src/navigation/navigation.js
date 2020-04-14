import { launchBottomTab } from "./rnn/bottom-tab"
import { Navigation } from "react-native-navigation";
import { registerBottomTabScreens } from "./router";

export const startupNavigation = (callback) => {
    registerBottomTabScreens()
    Navigation.events().registerAppLaunchedListener(() => {
        launchBottomTab()
        callback()
    });
}