import React from 'react'

let RootHOC = (WrappedComponent, store, client) => {
    class Enhance extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return ( <
                WrappedComponent {...this.props }
                />
            )
        }
    }
    return Enhance
}

export default RootHOC