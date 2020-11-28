import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { fetchProfiles } from "../actions/ProfilesActions";

const SettingsScreen = props => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchProfiles }, dispatch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  contentContainer: {
    paddingTop: 15
  },
  optionIconContainer: {
    marginRight: 12
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed"
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
