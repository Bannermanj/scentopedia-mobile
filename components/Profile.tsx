import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { List } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

export default function Profile({
  profile,
  name,
  image,
  commoName,
  nativeRange,
  funFacts,
  family,
  gardenUses,
  problems,
  smellsLike
}) {
  const [expanded, setExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
    key: ""
  });
  const isNonInitialData = key =>
    key === "image" ||
    key === "imageTwo" ||
    key === "id" ||
    key === "name" ||
    key === "chemicalCompounds" ||
    key === "culture" ||
    key === "nativeRange";

  const renderKey = key => {
    if (key === "chemicalCompounds") {
      return "Chemical Compounds";
    }
    if (key === "commonName") {
      return "Common Name";
    }
    if (key === "smellsLike") {
      return "Smells Like";
    }
    if (key === "interestingFacts") {
      return "Fun Facts";
    }
    if (key === "gardenUses") {
      return "Garden Uses";
    } else {
      return key;
    }
  };

  const handleCategoryOpen = (key, name) => {
    return setSelectedCategory({ key, name });
    /*if (key === selectedCategory.key && name === selectedCategory.name) {
      setSelectedCategory({ name: "", key: "" });
    } else setSelectedCategory({ key, name });*/
  };
  return (
    <View
      style={[
        {
          flex: 1,
          marginBottom: 200
        },
        !image && { display: "none" }
      ]}
    >
      <View style={styles.profile}>
        {image ? (
          <Image
            style={styles.image}
            source={{
              uri: `${image}`
            }}
          />
        ) : (
          []
        )}
        <Text style={styles.title}>{name}</Text>

        {Object.keys(profile).map((key, i) => (
          <View
            key={i}
            style={
              !isNonInitialData(key)
                ? styles.intialDataWrapper
                : { display: "none" }
            }
          >
            <Text numberOfLines={1} style={styles.initialDataTitle}>
              {renderKey(key)}:
            </Text>
            <Text numberOfLines={10} style={styles.initialDataText}>
              {profile[key]}
            </Text>
          </View>
        ))}
        <View style={styles.slightFull}>
          <TouchableOpacity style={styles.readMoreBtn}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View
          style={
            selectedCategory.key !== ""
              ? styles.categoryOpen
              : { display: "none" }
          }
        >
          <Text>{profile[selectedCategory.key]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 200
  },
  initialDataTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: "#fff",
    paddingLeft: 20,
    textTransform: "capitalize"
  },
  initialDataText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 12,
    paddingLeft: 20,
    paddingRight: 20
  },
  intialDataWrapper: {},
  readMoreBtn: {
    backgroundColor: "#0a497b",
    padding: 10,
    width: "100%",
    marginBottom: 20
  },
  readMore: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  edit: {
    color: "#0a497b",
    fontSize: 20,
    textAlign: "center"
  },
  editBtn: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%"
  },
  slightFull: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  categoryTrigger: {
    height: 50,
    backgroundColor: "#3b6d95",
    color: "#3EA244",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 7,
    marginTop: 7
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    fontStyle: "italic"
  },
  categoryOpen: {
    height: 100,
    backgroundColor: "red"
  },
  categoryItem: {
    backgroundColor: "red"
  },
  category: {
    fontSize: 20,
    fontWeight: "400",
    display: "flex",
    color: "#fff",
    textTransform: "capitalize"
  },
  profile: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },
  image: {
    width: 300,
    height: 300,
    display: "flex",
    alignSelf: "center",
    borderRadius: 150
  },
  name: {
    fontSize: 30
  },
  commonName: {
    fontSize: 20
  },
  none: {
    display: "none"
  }
});

/*<View
  key={i}
  style={
    !isNonInitialData(key)
      ? styles.categoryTrigger
      : { display: "none" }
  }
>
  <Text style={styles.category}>{renderKey(key)}</Text>
  <AntDesign
    onPress={() => setSelectedCategory({ key, name })}
    name="caretdown"
    size={24}
    color="white"
  />
</View>*/
