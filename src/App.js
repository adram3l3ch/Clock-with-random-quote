import Quote from "./components/quote/Quote";
import Time from "./components/time/Time";
import "./app.css";

function App() {
	return (
		<div className="app">
			<img src="https://source.unsplash.com/random" alt="bg" />
			<div className="container">
				<Quote />
				<Time />
			</div>
		</div>
	);
}

export default App;
