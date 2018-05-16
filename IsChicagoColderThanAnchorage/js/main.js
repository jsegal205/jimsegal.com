(async () => {

	const getTemp = async (lat, long) => {
		const API_URL = 'https://api.darksky.net/forecast/a895a7c5256b7eadc3074f3485db9406/';
		const response = await fetch(`${API_URL}${lat},${long}`);
		const json = await response.json();

		return parseFloat(json.currently.temperature);
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
