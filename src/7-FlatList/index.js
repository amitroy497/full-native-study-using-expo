import { useState } from 'react';
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

const Main = () => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [goals, setGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};
	const addGoalHandler = () => {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
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
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.goalText}>{itemData.item.text}</Text>
							</View>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					alwaysBounceVertical={false}
				/>
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
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
	},
});

export default Main;
