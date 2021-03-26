import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import { getSelectedGif } from "../state/reducers/gifsReducer";

const screenDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
  },
  gifImage: {
    width: screenDimensions.width * 0.9,
    height: screenDimensions.width,
  },
  giphyLogo: {
    width: 60,
    height: 60,
    marginLeft: 5,
  },
  poweredByContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

class GifViewer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.props.selectedGif.images.original.url }}
          style={styles.gifImage}
          resizeMode="contain"
        />
        <View style={styles.poweredByContainer}>
          <Text style={styles.poweredByText}>Powered By</Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.giphyLogo}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGif: getSelectedGif(state),
  };
};

export default connect(mapStateToProps)(GifViewer);
