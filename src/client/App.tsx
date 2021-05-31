import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';

const App = (props: AppProps) => {
	return (
		<Router>

			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

interface AppProps {}

export default App;
