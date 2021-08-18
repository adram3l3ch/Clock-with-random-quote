import React, { useEffect, useState } from "react";
import { IoIosPartlySunny } from "react-icons/io";
import { FaCloudMoon } from "react-icons/fa";
import "./time.css";

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const WEEKS = [
	"Sunday",
	"Munday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const Time = () => {
	const [time, setTime] = useState({ midday: "" });
	useEffect(() => {
		const fetchTime = () => {
			let currentHour = new Date().getHours();
			let convertedHour =
				currentHour > 12 && currentHour - 12 < 10
					? `0${currentHour - 12}`
					: currentHour > 12
					? `${currentHour - 12}`
					: currentHour < 10
					? `0${currentHour}`
					: `${currentHour}`;
			let currentMinute = new Date().getMinutes();
			currentMinute =
				currentMinute < 10 ? `0${currentMinute}` : `${currentMinute}`;
			let currentDate = new Date().getDate();
			let currentDay = WEEKS[new Date().getDay()];
			let currentMonth = MONTHS[new Date().getMonth()];
			setTime((time) => ({
				...time,
				hour: convertedHour,
				minute: currentMinute,
				midday: currentHour > 12 ? "PM" : "AM",
				date: currentDate,
				day: currentDay,
				month: currentMonth,
			}));
		};
		fetchTime();
		setInterval(fetchTime, 1000);
	}, []);

	return (
		<div className="section">
			<div className="wish">
				{time.midday === "AM" ? (
					<IoIosPartlySunny className="icon" />
				) : (
					<FaCloudMoon className="icon" />
				)}

				<p>
					GOOD {time.midday === "AM" ? "MORNING" : "EVENING"}, IT'S
					CURRENTLY
				</p>
			</div>
			<div className="time">
				<h1>
					{time.hour + ":" + time.minute}
					<span>{time.midday}</span>{" "}
				</h1>
				<h2>{time.month + " " + time.date + ", " + time.day}</h2>
			</div>
		</div>
	);
};

export default Time;
