import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./Pages/Home";
import AlumniDirectory from "./Pages/AlumniDirectory";
import MentorshipHub from "./Pages/MentorshipHub";
import CareerOpportunities from "./Pages/CareerOpportunities";
import EventsReunions from "./Pages/EventsReunions";
import SuccessStories from "./Pages/SuccessStories";
import ResourceCenter from "./Pages/ResourceCenter";
import ContactSupport from "./Pages/ContactSupport";

function App() {
	return (
		<div className="app">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/alumni-directory" element={<AlumniDirectory />} />
					<Route path="/mentorship-hub" element={<MentorshipHub />} />
					<Route
						path="/career-opportunities"
						element={<CareerOpportunities />}
					/>
					<Route path="/events-reunions" element={<EventsReunions />} />
					<Route path="/success-stories" element={<SuccessStories />} />
					<Route path="/resource-center" element={<ResourceCenter />} />
					<Route path="/contact-support" element={<ContactSupport />} />
				</Routes>
			</main>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
