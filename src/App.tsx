import { Box, Text } from '@mantine/core';
import classNames from './App.module.css';

function App() {
	const t = 'unused variable';
	return (
		<Box className={classNames.container}>
			<Text>React + Vite + Mantine + eslint bug reproduction</Text>
		</Box>
	);
}

export default App;
