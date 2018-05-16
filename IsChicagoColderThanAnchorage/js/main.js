(async () => {
	const API_URL = 'https://api.forecast.io/forecast/a895a7c5256b7eadc3074f3485db9406/';
	const getTemp = async (lat, long) => {
		// fetch(`${API_URL}${lat},${long}`)
		// 	.then(response => {
		// 		if (!response.ok) {
		// 			throw new error('something happened');
		// 		}

		// 		return response.data;
		// 	})
		// 	.then(json => json.currently.temperature)
		// 	.catch(error => {
		// 		// do something fun with no connection. maybe weird emoji or something
		// 	});

		return parseFloat(lat > 50 ? "12.345" : "23.456");
	};

	const setElementContent = (eleId, content) => {
		document.getElementById(eleId).innerHTML = content;
	};

	const toggleElementVisible = (eleId, isVisible) => {
		document.getElementById(eleId).hidden = !isVisible;
	};

	const chicagoTemp = await getTemp(41.8369, -87.6847);
	const anchorageTemp = await getTemp(61.2175, -149.8584);

	setElementContent('well-is-it', anchorageTemp > chicagoTemp ? "YES" : "NO");
	setElementContent('chicagoTemp', chicagoTemp);
	setElementContent('anchorageTemp', anchorageTemp);

	toggleElementVisible('chicago', true);
	toggleElementVisible('anchorage', true);
})();
