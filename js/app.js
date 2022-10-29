const input = document.querySelector('.input');
const checkButton = document.querySelector('.btn');
const output = document.querySelector('.output');

checkButton.addEventListener('click', () => {
	// * removes all special characters
	let filteredInput = input.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

	let reversedInput = filteredInput.split('').reverse().join('');

	output.style.display = 'block';

	if (filteredInput != reversedInput) {
		return (output.innerHTML = `<span>${input.value}</span> is NOT a palindrome!`);
	} else {
		return (output.innerHTML = `YES! <span>${input.value}</span> is a palindrome!`);
	}
});
