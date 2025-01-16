import React, { useState, useEffect } from "react";
import axios from "axios";

import Banner from "../../components/Banner/Banner";
import CardGallery from "../../components/CardGallery/CardGallery";
import CardItem from "../../components/CardItem/CardItem";
import imageSrc from "../../assets/covers/Cover1.webp";

import LogementsData from "../../datas/logements.json";

import "./_home.scss";

function Home() {
	const bannerText = "Chez vous, partout et ailleurs";

	const [Data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URL}/logements`
				);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				setError("Failed to fetch data");
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="home">
			<Banner
				imageSrc={imageSrc}
				text={bannerText}
			/>
			<CardGallery>
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>{error}</p>
				) : (
					Data.map((logement) => (
						<CardItem
							key={`${logement.id}-${logement.title}`}
							id={logement.id}
							title={logement.title}
							cover={logement.cover}
						/>
					))
				)}
			</CardGallery>
		</div>
	);
}

export default Home;
