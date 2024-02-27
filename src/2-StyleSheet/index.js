import { Button, StyleSheet, Text, View } from 'react-native';

const Main = () => {
	return (
		<View>
			<View>
				<Text style={styles.dummyText}>Another piece of text!</Text>
			</View>
			<Text style={styles.dummyText}>Hello World!</Text>
			<Button title='Tape me!' />
		</View>
	);
};

const styles = StyleSheet.create({
	dummyText: {
		margin: 16,
		padding: 16,
		borderWidth: 2,
		borderColor: 'red',
	},
});

export default Main;
