import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  home: {
    backgroundColor: "white",
    height: "100%",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 35,
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontWeight: "200",
    fontSize: 30,
    lineHeight: 45,
    color: "#737373",
  },
  activeHeaderText: {
    color: "black",
    fontWeight: "400",
  },
  actions: {
    alignItems: "center",
    marginTop: 10,
  },
  topActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  topActionsText: {
    fontWeight: "400",
    fontSize: 27,
    lineHeight: 45,
    color: "#23A6F0", // hex code
    marginLeft: 5,
  },
  bottomActions: {
    alignItems: "center",
    height: "47%",
    justifyContent: "space-evenly",
  },
  bottomActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomActionsText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#23A6F0",
  },
  bottomActionsImage: {
    marginRight: 7,
  },
});

export default style;
