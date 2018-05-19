(async () => {

	const getTemp = async (lat, long) => {
		const API_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9bf0ee26559265f94c44015dbce8177d&units=imperial';
		const response = await fetch(`${API_URL}&lat=${lat}&lon=${long}`);
		if (!response.ok) {
			getElementById('well-is-it').className = 'error';
			setElementContent('well-is-it', '¯\\_(ツ)_/¯');
			setElementContent('loading', 'Error getting temperatures');
			return false;
		}
		const json = await response.json();

		return parseFloat(json.main.temp);
	};

	const getElementById = (eleId) => {
		return document.getElementById(eleId);
	}

	const setElementContent = (eleId, content) => {
		getElementById(eleId).innerHTML = content;
	};

	const toggleElementVisible = (eleId, isVisible) => {
		getElementById(eleId).hidden = !isVisible;
	};

	const chicagoTemp = await getTemp(41.8369, -87.6847);
	const anchorageTemp = await getTemp(61.2175, -149.8584);

	if (chicagoTemp && anchorageTemp) {
		getElementById('well-is-it').className = '';
		toggleElementVisible('loading', false);

		setElementContent('well-is-it', anchorageTemp > chicagoTemp ? 'YES' : 'NO');
		setElementContent('chicagoTemp', chicagoTemp);
		setElementContent('anchorageTemp', anchorageTemp);

		toggleElementVisible('chicago', true);
		toggleElementVisible('anchorage', true);
	}
})();
