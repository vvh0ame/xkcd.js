from requests import get

class Xkcd:
	def __init__(self) -> None:
		self.api = "https://xkcd.com"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	
	def get_current_comics(self) -> dict:
		return get(
			f"{self.api}/info.0.json",
			headers=self.headers).json()

	def get_comics_info(self, comics_id: int) -> dict:
		return get(
			f"{self.api}/{comics_id}/info.0.json",
			headers=self.headers).json()
