import { LayoutTabsChildren } from 'react-native-navigation';

export interface Navigator {
	push(params: any): void;
	pop(params: any): void;
	init(callback?: any): void;
	setupBottomTab(tabs: LayoutTabsChildren[]): void;
}
