import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/GifSearchBar";
import GifsList from "../components/GifsList";

const screenDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
  },
  containerParent: {
    backgroundColor: "#fff",
  },
  logo: {
    // width: screenDimensions.width * 0.5,
    // height: "auto",
    // alignItems: "center",
    // flex: 1,
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={{}}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: screenDimensions.width * 0.6,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            resizeMode="contain"
          />
          <SearchBar />
          <GifsList navigation={this.props.navigation} />
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
