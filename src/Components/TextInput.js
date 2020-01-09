import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet, Animated} from 'react-native';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});
  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === '' ? 0 : 1,
    );
  }
  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }
  render() {
    const {label, ...props} = this.props;

    const labelStyle = {
      position: 'absolute',
      left: 5,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#bfbfbfbf', '#2caf1e'],
      }),
      fontFamily: 'Roboto-Light',
    };
    return (
      <View style={{flex: 1}}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={[
            {
              marginTop: 5,
              textAlignVertical: this.props.minHeight ? 'top' : 'bottom',
              color: '#000',
              fontFamily: 'Roboto-Medium',
            },
            props.styles,
          ]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}
