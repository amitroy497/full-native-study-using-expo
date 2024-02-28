import { useState } from 'react';
import {
	Button,
	FlatList,
	Image,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

const Main = () => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	const [goals, setGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const GoalImage = require('../../assets/images/goal.png');

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	};
	const addGoalHandler = () => {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		endAddGoalHandler();
	};

	const deleteGoalHandler = (id) => {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => {
				return goal.id !== id;
			});
		});
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title='Add New Goal'
				color='##a065ec'
				onPress={startAddGoalHandler}
			/>
			<Modal visible={modalIsVisible} animationType='slide'>
				<View style={styles.inputContainer}>
					<Image source={GoalImage} style={styles.image} />
					<TextInput
						style={styles.textinput}
						placeholder='Enter a goal'
						onChangeText={goalInputHandler}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='Cancel'
								onPress={endAddGoalHandler}
								color='#f31282'
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Add Goal'
								onPress={addGoalHandler}
								color='##b180f0'
							/>
						</View>
					</View>
				</View>
			</Modal>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalItem}>
								<Pressable
									android_ripple={{ color: '#FFC0CB' }}
									onPress={deleteGoalHandler.bind(this, itemData.item.id)}
									style={(pressed) => {
										return pressed && styles.pressedItem;
									}}
								>
									<Text style={styles.goalText}>{itemData.item.text}</Text>
								</Pressable>
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
		backgroundColor: '#1e085a',
		width: '100%',
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311bbb',
	},
	textinput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		color: '#120438',
		borderRadius: 6,
		width: '100%',
		padding: 16,
	},
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		padding: 8,
		color: 'white',
	},
	pressedItem: {
		opacity: 0.5,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});

export default Main;
