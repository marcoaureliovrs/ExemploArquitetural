import React, { PureComponent } from 'react';
import {
  Item,
  Input,
  Label,
  Icon,
  Text,
} from '@codler/native-base';

import { StyleSheet, View, } from 'react-native';
import styles from './input.styles';
import IconButton from '../buttons/icon-button';

class InputText extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      borderBottomWidth: 1,
      color: '#666666',
      underlineColor: '#226dc3',
      textColor: '#666666',
      isNew: true,
    }
  }

  componentDidMount() {
    const { underlineColor = '#226dc3', labelColor = '#666666', textColor = '#666666' } = this.props;
    this.setState({
      color: labelColor,
      underlineColor: underlineColor,
      textColor: textColor,
    });
  }

  onFocus() {
    const { textColor = '#226dc3', underlineColor = '#226dc3' } = this.props;
    this.setState({
      underlineColor: underlineColor,
      borderBottomWidth: 2,
      underlineColor: underlineColor,
      textColor: textColor
    });

  }

  onBlur() {
    const { textColor = '#666666', labelColor = '#666666', underlineColor = '#226dc3' } = this.props;
    this.setState({
      underlineColor: underlineColor,
      borderBottomWidth: 1,
      color: labelColor,
      textColor: textColor
    });

    this.validateHandler();
  }

  validateHandler() {
    const { asValid = undefined } = this.props;
    this.setState({ isNew: false })

    if (asValid !== undefined) {
      if (asValid == false) {
        this.setState({
          underlineColor: '#FF6E6E'
        });
      }
    }
  }

  showErrorMessage() {
    if (this.props.asValid == false && this.state.isNew == false) {
      return (
        <View style={styles.viewShowErrorMessage}>
          <View style={styles.viewTextErrorMessage}>
            <Text style={styles.textErrorMessage}>{this.props.errorMessage}</Text>
          </View>

          <View style={styles.viewIconExclamationcircle}>
            <Icon type='AntDesign' name='exclamationcircle' style={styles.iconErrorMessage} />
          </View>
        </View>
      );
    }
  }

  renderIcon() {
    if (this.props.nameIcon) {
      return (
        <View style={{
          position: 'absolute',
          right: 0,
          bottom: 5,
        }}>
          <IconButton
            theme={this.props.themeIcon}
            name={this.props.nameIcon}
            color={this.props.colorIcon}
            fontSize={this.props.fontSizeIcon}
            onPress={() => { }}
          />
        </View>
      )
    }
  }

  render() {
    const { underlineColor = '#226dc3', textColor = '#666666' } = this.props;

    return (
      <View>
        <Item
          floatingLabel
          style={[{
            flexDirection: 'row',
            marginTop: 16,
            borderColor: underlineColor,
            borderBottomWidth: this.state.borderBottomWidth,
          }, this.props.style]}>
          <Label style={{ color: textColor, fontSize: 16 }}>{this.props.label}</Label>
          <Input
            onBlur={() => {
              this.onBlur();
              if (this.props.onBlurAction) {
                return this.props.onBlurAction();
              }
            }
            }
            onFocus={() => this.onFocus()}
            style={[{ color: this.state.textColor }]}
            {...this.props}
          />


        </Item>
        {this.renderIcon()}
      </View>


    );
  };
}

export default InputText;