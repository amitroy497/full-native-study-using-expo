import { Button, Text, View } from 'react-native';

const Main = () => {
	return (
		<View>
			<View>
				<Text>Another piece of text!</Text>
			</View>
			<Text
				style={{ margin: 16, borderWidth: 2, borderColor: 'red', padding: 16 }}
			>
				Hello World!
			</Text>
			<Button title='Tape me!' />
		</View>
	);
};

export default Main;
