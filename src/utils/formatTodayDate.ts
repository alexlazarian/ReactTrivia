export function getFormattedDate(): string {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const month = monthNames[new Date().getMonth()]
	const dayNumber = new Date().getDate()
	const yearNumber = new Date().getFullYear()

	return `${month} ${dayNumber}, ${yearNumber}`
}
