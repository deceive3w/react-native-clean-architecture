import { HOME_SCREEN } from "../../screens/home/const";
import { registerBottomTabScreens } from "../router";
import { Navigation } from "react-native-navigation";

export const tabs = () => [{
    stack: {
        children: [{
            component: {
                ...HOME_SCREEN,
            }
        }, ],
        options: {
            bottomTab: {
                text: 'Home',
            },
        }
    },
}]

export const launchBottomTab = () => {

    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'mainApp',
                children: tabs(),
                options: {
                    bottomTabs: {
                        iconColor: 'gray',
                        textColor: 'gray',
                        selectedIconColor: 'black',
                        selectedTextColor: 'black',
                        text: 'Home',
                        testID: 'HOME_SCREEN',
                    }
                }
            },
        },
        layout: {
            orientation: ['portrait'] // An array of supported orientations,
        }
    });
}