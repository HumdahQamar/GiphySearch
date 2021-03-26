import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View, TextInput } from "react-native";

import { fetchGifs } from "../state/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
  },
  input: {
    borderColor: "#989898",
    backgroundColor: "#fff",
    height: 10,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 16,
    flex: 1,
    width: "100%",
    padding: 8,
  },
});

class SearchBar extends Component {
  setValue = (value) => {
    this.props.fetchGifs(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search GIPHY"
          onChangeText={this.setValue}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchGifs,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(SearchBar);
