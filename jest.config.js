module.exports = {
	preset: 'react-native',
	transform: {
		'^.+\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js')
	},
	moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
	setupFilesAfterEnv: [ '<rootDir>setup-tests.js' ]
};
