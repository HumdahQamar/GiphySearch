import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  getGifs,
  getSelectedGif,
  getOffset,
} from "../state/reducers/gifsReducer";
import { selectGif, setOffset } from "../services/gifsService";

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
  constructor(props) {
    super(props);
    this.state = {
      // search: "",
    };
  }

  selectGif(gif) {
    this.props.setSelectedGif(gif);
    this.props.navigation.navigate("GifViewer");
  }

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
              <TouchableOpacity onPress={() => this.selectGif(item)}>
                <Image
                  source={{ uri: item.images.preview_gif.url }}
                  style={{ width: 200, height: 200 }}
                />
              </TouchableOpacity>
            </View>
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
      setSelectedGif: selectGif,
      setOffset,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GifsList);
