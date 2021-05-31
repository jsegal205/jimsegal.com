import * as React from 'react';
import { useState, useEffect } from 'react';

const Home = (props: HomeProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Hello {greeting}!</h1>
		</main>
	);
};

interface HomeProps {}

export default Home;
