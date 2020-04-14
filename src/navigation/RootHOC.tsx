import React from 'react';

let RootHOC = (WrappedComponent: any) => {
	class Enhance extends React.Component {
		constructor(props: any) {
			super(props);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}
	return Enhance;
};

export default RootHOC;
