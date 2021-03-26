import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setSelectedGif } from "../state/actions";

class GifThumbnail extends Component {
  selectGif(gif) {
    this.props.setSelectedGif(gif);
    this.props.navigation.navigate("GifViewer");
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          width: "170px",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "5px",
          paddingTop: "5px",
        }}
      >
        <TouchableOpacity onPress={() => this.selectGif(this.props.item)}>
          <Image
            source={{ uri: this.props.item.images.preview_gif.url }}
            style={{ width: 200, height: 200 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSelectedGif,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(GifThumbnail);
