// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LoginForm from '../../components/login-form';
import * as loginActions from './actions';
import {defaultStyles} from  '../../styles/default-styles';

const myStyles = {
};

const combinedStyles = Object.assign({},defaultStyles,myStyles);
const styles = StyleSheet.create(combinedStyles);

class CreateNewAccount extends Component {

    static propTypes = {
        actions: PropTypes.object,
        navigation: PropTypes.object
    };

    static navigationOptions = {
        title: 'Create New Account'
    };

		constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

		onButtonPress() {}

    render() {
        return (
            <View style={styles.container}>
                <LoginForm buttonText='Create Account' onButtonPress={this.props.actions.createUser}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
   return {session: state.login.session};
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewAccount );
