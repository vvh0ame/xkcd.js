class Xkcd {
	constructor() {
		this.api = "https://xkcd.com"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	}

	async getCurrentComics() {
		const response = await fetch(
			`${this.api}/info.0.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getComicsInfo(comicsId) {
		const response = await fetch(
			`${this.api}/${comicsId}/info.0.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Xkcd}
