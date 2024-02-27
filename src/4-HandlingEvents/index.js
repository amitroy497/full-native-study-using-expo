import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Main = () => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};
	const addGoalHandler = () => {
		console.log(enteredGoalText);
	};
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textinput}
					placeholder='Enter a goal'
					onChangeText={goalInputHandler}
				/>
				<Button title='Add Goal' onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals ...</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textinput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
});

export default Main;
