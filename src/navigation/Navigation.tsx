import { Navigator } from './types';

export default class Navigation {
	static navigator: Navigator;
	static instance = null;
	constructor(navigator: Navigator) {
		Navigation.navigator = navigator;
	}

	static getNavigator() {
		if (!Navigation.navigator) {
			throw new Error('Navigator is required.');
		} else {
			return Navigation.navigator;
		}
	}
}
