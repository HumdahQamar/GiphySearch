import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";

import {
  getGifs,
  getSelectedGif,
  getOffset,
} from "../state/reducers/gifsReducer";
import { setSelectedGif } from "../state/actions";
import { setOffset } from "../services/gifsService";
import GifThumbnail from "./GifThumbnail";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    minHeight: "75vh",
    justifyContent: "center",
    alignSelf: "stretch",
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
});

class GifsList extends Component {
  loadMoreData() {
    console.log("Load more data: ", this.props.offset);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.gifs}
          numColumns={2}
          onEndReached={this.loadMoreData()}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <GifThumbnail item={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gifs: getGifs(state),
    selectedGif: getSelectedGif(state),
    offset: getOffset(state),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSelectedGif,
      setOffset,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GifsList);
