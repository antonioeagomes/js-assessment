exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
	async: function (value) {
		const promise = new Promise((resolve) => resolve(value));
		return promise;
	},

	manipulateRemoteData: function (url) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.onload = () => {
				if (xhr.status === 200) resolve(xhr.response);
				else reject(Error(xhr.statusText));
			};
			xhr.send();
		}).then((response) => {
			const data = JSON.parse(response).people;
			return data.map((k) => k.name).sort();
		});
	},
};
