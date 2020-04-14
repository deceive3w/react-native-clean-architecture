import RootHOC from '../RootHOC';
import { Navigation } from 'react-native-navigation';
import { ComponentProvider } from 'react-native';

export function RegisterComponent(name: string, Component: any, wrapper?: ComponentProvider) {
	if (wrapper) {
		Navigation.registerComponent(name, () => RootHOC(Component));
	} else {
		Navigation.registerComponent(name, () => Component);
	}
}
