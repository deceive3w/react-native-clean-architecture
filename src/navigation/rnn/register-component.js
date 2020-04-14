import RootHOC from "../root-hoc"
import { Navigation } from "react-native-navigation"

export const registerComponent = (name, component) => {
    Navigation.registerComponent(
        name,
        () => RootHOC(component),
    )
}