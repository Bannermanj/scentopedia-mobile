import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProfiles } from "../actions/ProfilesActions";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
  SafeAreaView
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import Spinner from "react-native-loading-spinner-overlay";

import Profile from "../components/Profile";

const SearchScreen = props => {
  const [textValue, onChangeText] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(
    () => {
      setFilteredProfiles(
        profiles.plantProfiles.filter(profile =>
          profile.name.toLowerCase().includes(textValue.toLowerCase())
        )
      );
    },
    [textValue]
  );

  const handleFilteredProfiles = profile => {
    onChangeText(profile.name);
  };

  const { profiles, isLoading } = props;

  if (filteredProfiles.length === 0 && textValue !== "" && !isLoading) {
    return <Text>No Results Found</Text>;
  }

  return (
    <SafeAreaView
      style={profiles.isLoading ? styles.loadingContainer : styles.container}
    >
      <View
        style={[
          styles.searchWrapper,
          !profiles.plantProfiles && { display: "none" }
        ]}
      >
        <TextInput
          style={styles.searchInput}
          onChangeText={text => onChangeText(text)}
          value={textValue}
          placeholder={"Search Plant Profiles..."}
          clearButtonMode={"always"}
        />
      </View>
      {textValue.length > 0 ? (
        filteredProfiles.map((profile, index) => (
          <Pressable
            style={index < 3 ? styles.searchResults : { display: "none" }}
            key={index}
            onPress={() => handleFilteredProfiles(profile)}
          >
            <Text style={styles.searchResultsText} numberOfLines={1}>
              {profile.name}
            </Text>
          </Pressable>
        ))
      ) : (
        <View style={{ marginBottom: 30 }} />
      )}
      <View
        style={profiles.isLoading ? styles.viewWrapper : { display: "none" }}
      >
        <Spinner
          visible={profiles.isLoading}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
      <FlatList
        data={filteredProfiles}
        renderItem={({ item, index }) => (
          <Profile
            profile={item}
            commonName={item.commonName}
            nativeRange={item.nativeRange}
            funFacts={item.interestingFacts}
            family={item.family}
            problems={item.problems}
            gardenUses={item.gardenUses}
            smellsLike={item.smellsLike}
            name={item.name}
            image={item.image}
            imageTwo={item.imageTwo}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    backgroundColor: "#3EA244"
  },
  searchInput: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "98%",
    display: "flex",
    alignSelf: "center"
  },
  searchResults: {
    backgroundColor: "#C0C0C0",
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 1,
    display: "flex",
    justifyContent: "center",
    height: 30
  },
  searchResultsText: {
    paddingLeft: 10,
    paddingRight: 10
  },
  viewWrapper: {
    margin: "auto",
    color: "#0a497b",
    marginTop: "48%"
  },
  searchWrapper: {
    marginTop: 30,
    backgroundColor: "#fff",
    height: 45,
    display: "flex",
    justifyContent: "center"
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#3EA244",
    opacity: 0.7
  },
  title: {
    fontSize: 25
  },
  spinnerTextStyle: {
    fontSize: 30
  },
  plantFacts: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    marginTop: "45%",
    marginLeft: "5%",
    marginRight: "5%"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  profileHeader: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 25,
    marginTop: 25,
    backgroundColor: "#fff",
    color: "#3EA244"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
