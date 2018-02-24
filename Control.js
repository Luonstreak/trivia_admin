import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    

    sendOrder = (type) => {
        const ref = firebase.database().ref('socket')
        var order;
        switch (type) {
            case 'count_up':
                ref.push({
                    order: 'count_up',
                    sender: 'admin'
                });
                break;
            case 'init':
                ref.push({
                    order: 'game_init',
                    sender: 'admin'
                });
                break;
            case 'quest':
                ref.push({
                    order: 'quest',
                    sender: 'admin'
                });
                break;
            case 'expl':
                ref.push({
                    order: 'expl',
                    sender: 'admin'
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    buttonStyle={{ marginBottom: 20, width: 200 }}
                    title={`INCREASE COUNT - ${this.state.count}`}
                    onPress={() => this.sendOrder('count_up')}
                />
                <Button
                    buttonStyle={{ marginBottom: 20, width: 200 }}
                    title="START GAME"
                    onPress={() => this.sendOrder('init')}
                />
                <Button
                    buttonStyle={{ marginBottom: 20, width: 200 }}
                    title="RENDER QUESTION"
                    onPress={() => this.sendOrder('quest')}
                />
                <Button
                    buttonStyle={{ marginBottom: 20, width: 200 }}
                    title="RENDER EXPLANATION"
                    onPress={() => this.sendOrder('expl')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    linearGradient: {
        borderRadius: 50,
        marginBottom: 20,
        width: 200
    },
    buttonText: {
        backgroundColor: 'transparent'
    }
});

export default Control;