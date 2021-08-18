import React, { useEffect, useState } from "react";
import "./quote.css";

const Quote = () => {
	const URL = "https://api.quotable.io/random";
	const [quote, setQuote] = useState({ author: "", content: "" });

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const resp = await fetch(URL);
				const fetchedQuote = await resp.json();
				setQuote({
					content: `"${fetchedQuote.content}"`,
					author: fetchedQuote.author,
				});
			} catch (error) {
				console.log("error");
			}
		};
		fetchQuote();
	}, []);
	return (
		<div className="quote">
			<h3>{quote.content}</h3>
			<p>- {quote.author} -</p>
		</div>
	);
};

export default Quote;
