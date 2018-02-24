import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo'
import firebase from 'firebase';

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 1 }
	}
    

	sendOrder = (type) => {
		const { count } = this.state;
		const ref = firebase.database().ref('socket')
		var order;
		switch (type) {
			case 'count_up':
				if(count == 12){
					this.setState({ count: 'WINNERS' })
					ref.push({
						order: 'winners',
						sender: 'admin'
					});
				} else if(count == 'WINNERS' ){
					this.setState({ count: 1 })
					ref.push({
						order: 'count_up',
						sender: 'admin'
					});
				} else {
						var newCount = count + 1;
					this.setState({ count: newCount })
					ref.push({
						order: 'count_up',
						sender: 'admin'
					});   
				}
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
			case 'answer':
				ref.push({
					order: 'answer',
					sender: 'admin'
				});
				break;
			case 'hart':
				ref.push({
					order: 'heart',
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
				<LinearGradient
					start={{ x: 0.0, y: 0.5 }} 
					end={{ x: 1.0, y: 0.5 }} 
					colors={['#84fab0','#8fd3f4']} 
					style={[styles.linearGradient, { marginBottom: 40 }]}
				>
					<Button
						buttonStyle={styles.buttonText}
						title='START GAME'
						onPress={() => this.sendOrder('init')}
					/>
				</LinearGradient>
				<LinearGradient
					start={{ x: 0.0, y: 0.5 }} 
					end={{ x: 1.0, y: 0.5 }} 
					colors={['#4facfe','#00f2fe']} 
					style={styles.linearGradient}
				>
					<Button
						buttonStyle={styles.buttonText}
						title='QUESTION'
						onPress={() => this.sendOrder('quest')}
					/>
				</LinearGradient>
				<LinearGradient
					start={{ x: 0.0, y: 0.5 }} 
					end={{ x: 1.0, y: 0.5 }} 
					colors={['#c471f5','#fa71cd']} 
					style={styles.linearGradient}
				>
					<Button
						buttonStyle={styles.buttonText}
						title='EXPLANATION'
						onPress={() => this.sendOrder('expl')}
					/>
				</LinearGradient>
				<LinearGradient
					start={{ x: 0.0, y: 0.5 }} 
					end={{ x: 1.0, y: 0.5 }} 
					colors={['#ff9a9e','#fecfef']} 
					style={styles.linearGradient}
				>
					<Button
						buttonStyle={styles.buttonText}
						title='ANSWER'
						onPress={() => this.sendOrder('answer')}
					/>
				</LinearGradient>
				<LinearGradient
					start={{ x: 0.0, y: 0.5 }}
					end={{ x: 1.0, y: 0.5 }}
					colors={['#a18cd1', '#fbc2eb']}
					style={styles.linearGradient}
				>
					<Button
						buttonStyle={styles.buttonText}
						title={`COUNT (${this.state.count})`}
						onPress={() => this.sendOrder('count_up')}
					/>
				</LinearGradient>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		marginTop: 50
	},
	linearGradient: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginBottom: 20,
		width: 200,
		height: 50
	},
	buttonText: {
		backgroundColor: 'transparent'
	}
};

export default Control;