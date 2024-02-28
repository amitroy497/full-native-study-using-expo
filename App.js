import { StyleSheet, View } from 'react-native';
import Main from './src/9-MakingItemsDeletableUsingID';
// import Main from './src/8-HandlingTapsWithPressableComponent';
// import Main from './src/7-FlatList';
// import Main from './src/6-ScrollView';
// import Main from './src/5-ManagingAList';
// import Main from './src/4-HandlingEvents';
// import Main from './src/3-LayoutAndFlexbox';
// import Main from './src/2-StyleSheet';
// import Main from './src/1-InlineStyles';

export default function App() {
	return (
		<View style={styles.container}>
			<Main />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
