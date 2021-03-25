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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
  },
  title: {
    fontSize: 32,
  },
  poweredByContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
  },
});

class GifViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // search: "",
    };
  }

  // renderItem = ({ item }) => {
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{item.url}</Text>
  //   </View>;
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.selectedGif.url}</Text> */}
        <Image
          source={{ uri: this.props.selectedGif.images.original.url }}
          style={{
            width: screenDimensions.width * 0.9,
            height: screenDimensions.width,
          }}
          resizeMode="contain"
        />
        <View style={styles.poweredByContainer}>
          <Text style={styles.poweredByText}>Powered By</Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: 60,
              height: 60,
              marginLeft: 5,
              // alignItems: "center",
              // justifyContent: "center",
            }}
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

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       fetchGifs: api,
//     },
//     dispatch
//   );

export default connect(mapStateToProps)(GifViewer);
