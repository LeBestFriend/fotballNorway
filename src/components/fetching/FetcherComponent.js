import { useState } from "react";

export default function FetcherComponent({ myUrl, setData }) {
	const [showText, setShowText] = useState(false)

	async function fetchData() {
		async function apiResponse() {
			const url = myUrl;
			const options = {
				method: 'GET',
				headers: {
					'x-rapidapi-key': process.env.REACT_APP_API_KEY,
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
				}
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();

				alert("Data from " + myUrl + " has been fetched")
				setData(result.response[0].league.standings[0])
				setShowText(true)
				console.log(result.response[0].league.standings[0]) 
			} catch (error) {
				return error;
			}
		}
		async function logUsedUpRequests() {
			
			//localStorage.setItem('currentFetch', apiResponse())

			var currentLocalStorage = localStorage.getItem('apiCount')
			console.log("")
			console.log("antall api sporringer brukt før kjøring:" + currentLocalStorage)
			console.log("")
			if (currentLocalStorage == null) {
				localStorage.setItem('apiCount', '1')
			} else {
				localStorage.setItem('apiCount', String(parseInt(currentLocalStorage, 10) + 1))
			}
			console.log("antall api sporringer brukt etter kjøring:" + localStorage.getItem('apiCount'))
			console.log("")
		}

		apiResponse()
		logUsedUpRequests()
	}

	return (

		<div>
			<button onClick={fetchData}>Fetch</button>
			{showText && <p>Data er fetchet</p>}
		</div>
	)


}
