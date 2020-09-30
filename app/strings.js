exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
	reduceString: function (str, amount) {},

	wordWrap: function (str, cols) {
		const words = str.split(' ');
		var result = '';
		let currentLength = 0;
		let word = '';
		let newLine = '';

		for (let i = 0; i < words.length; i++) {
			word = words[i];
			currentLength += word.length;
			if (i === 0) {
				newLine = '';
			} else if (currentLength > cols) {
				currentLength = word.length;
				newLine = '\n';
			} else {
				newLine = ' ';
			}

			result += newLine + word;
		}

		return result;
	},

	reverseString: function (str) {
		return str.split('').reverse().join('');
	},
};
