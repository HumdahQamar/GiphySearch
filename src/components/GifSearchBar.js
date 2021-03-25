import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View, TextInput } from "react-native";

import { api } from "../services/api";

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
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  setValue = (value) => {
    // console.log(this.props);
    // this.setState({ search: value });
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
      fetchGifs: api,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(SearchBar);
