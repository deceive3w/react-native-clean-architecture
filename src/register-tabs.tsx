import { HOME_SCREEN } from './screens/home/const';

export const tabs = [
	{
		stack: {
			children: [
				{
					component: {
						...HOME_SCREEN
					}
				}
			],
			options: {
				bottomTab: {
					text: 'Home'
				}
			}
		}
	}
];
