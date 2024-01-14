const formatDatetime = (datetime: Date) => {
	const myDatetime = new Date(datetime);
	return (
		myDatetime.toLocaleDateString([], {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	);
};

export default formatDatetime;
