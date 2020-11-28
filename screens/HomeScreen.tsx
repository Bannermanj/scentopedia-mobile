import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProfiles } from "../actions/ProfilesActions";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ImageBackground
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MonoText } from "../components/StyledText";

const HomeScreen = props => {
  useEffect(() => {
    props.fetchProfiles();
  }, []);

  const { profiles } = props;
  console.log(props);
  const image =
    "https://www.gardenia.net/storage/app/public/guides/detail/213079Optimized.jpg";
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.spacingTop} />
        <View style={styles.getStartedWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: image
            }}
          />
        </View>
        <Text style={styles.getStartedText}>SCENTOPEDIA</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerBtnText}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
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
    backgroundColor: "rgba(62, 162, 68, .7)",
    flexDirection: "column",
    opacity: 0.9
  },
  spacingTop: {
    marginTop: 50
  },
  image: {
    borderRadius: 150,
    height: 275,
    width: 275
  },
  getStartedWrapper: {
    borderRadius: 150,
    height: 275,
    width: 275,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#282828",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  getStartedText: {
    marginTop: "10%",
    fontSize: 45,
    color: "#fff",
    textAlign: "center",
    shadowColor: "#282828",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#148FF5",
    width: "100%",
    padding: 10,
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  registerBtn: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  registerBtnText: {
    fontSize: 20,
    color: "#0a497b"
  },
  loginBtnText: {
    fontSize: 20,
    color: "#fff"
  },
  forgot: {
    color: "#0a497b",
    textAlign: "center",
    fontSize: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
