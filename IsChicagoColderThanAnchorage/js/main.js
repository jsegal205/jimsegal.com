(async () => {

	const getTemp = async (lat, long) => {
		const API_URL = 'https://api.darksky.net/forecast/a895a7c5256b7eadc3074f3485db9406/';
		const response = await fetch(`${API_URL}${lat},${long}?lang=en&units=us&exclude=minutely,hourly,daily,alerts,flags`);
		if (!response.ok) {
			setElementContent('well-is-it', '¯\\_(ツ)_/¯');
			setElementContent('loading', 'Error getting temperatures');
		}
		const json = await response.json();

		return parseFloat(json.currently.temperature);
	};

	const getElementById = (eleId) => {
		return document.getElementById(eleId);
	}

	const setElementContent = (eleId, content) => {
		getElementById(eleId).innerHTML = content;
	};

	const toggleElementVisible = (eleId, isVisible) => {
		ele = getElementById(eleId);
		ele.hidden = !isVisible;
		ele.setAttribute('aria-hidden', !isVisible);
	};

	const chicagoTemp = await getTemp(41.8369, -87.6847);
	const anchorageTemp = await getTemp(61.2175, -149.8584);

	toggleElementVisible('loading', false);

	setElementContent('well-is-it', anchorageTemp > chicagoTemp ? 'YES' : 'NO');
	setElementContent('chicagoTemp', chicagoTemp);
	setElementContent('anchorageTemp', anchorageTemp);

	toggleElementVisible('chicago', true);
	toggleElementVisible('anchorage', true);
})();
