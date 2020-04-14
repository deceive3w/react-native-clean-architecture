import { Navigation, LayoutBottomTabs, Layout, Options, LayoutTabsChildren } from 'react-native-navigation';

export default class BottomTab {
	tabs: LayoutTabsChildren[];
	constructor(tabs: LayoutTabsChildren[]) {
		this.tabs = tabs;
	}
	setRoot(options?: Options) {
		Navigation.setRoot({
			root: {
				bottomTabs: {
					id: 'mainApp',
					children: this.tabs,
					options: options
				}
			}
		});
	}
}
