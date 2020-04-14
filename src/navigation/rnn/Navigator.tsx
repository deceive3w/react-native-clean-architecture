import { Navigator } from '../types';
import { Navigation, LayoutTabsChildren } from 'react-native-navigation';
import BottomTab from './BottomTab';

export default class NavigatorImpl implements Navigator {
	init(callback?: any): void {
		Navigation.events().registerAppLaunchedListener(() => {
			if (callback) {
				callback();
			}
		});
	}
	push(params: any): void {
		throw new Error('Method not implemented.');
	}
	pop(params: any): void {
		throw new Error('Method not implemented.');
	}
	setupBottomTab(tabs: LayoutTabsChildren[]) {
		new BottomTab(tabs).setRoot();
	}
}
