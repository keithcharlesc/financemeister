import React from "react";
import { Link } from "react-router-dom";
import FinanceBro from "../Images/Revenue-bro.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Contexts/AuthContext";
import useDate from "../Hooks/useDate";

const Home = () => {
	const { currentUser } = useAuth();
	const { today, oneWeekAgo, oneMonthAgo, oneYearAgo } = useDate();
	console.log(today);
	console.log(oneWeekAgo);
	console.log(oneMonthAgo);
	console.log(oneYearAgo);
	return (
		<div className="bg-white h-screen flex flex-row justify-center items-center">
			<div className="max-w-md">
				<h1 className="whitespace-nowrap lg:text-6xl md:text-7xl sm:text-5xl text-3xl font-black mb-3 ">
					FinanceMeister
				</h1>
				<p className="mb-8">
					A website to help track one's transactions (expenses and
					income). Provides some useful analysis based on the
					transactions.
				</p>
				<Link
					className="py-2 px-4 bg-blue-300 rounded-full text-md hover:bg-blue-200 transition duration-300 ease-in-out items-center"
					to="/register"
				>
					Sign Up Now!{" "}
				</Link>
			</div>
			<img src={FinanceBro} alt="Landing Page" className="h-3/4" />
			<ToastContainer />
		</div>
	);
};

export default Home;
