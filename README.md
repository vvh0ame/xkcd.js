# xkcd.js
Web-API for [xkcd.com](https://xkcd.com) website to retrieve xkcd comics 

## Example
```JavaScript
async function main() {
	const { Xkcd } = require("./xkcd.js")
	const xkcd = new Xkcd()
	const currentComics = await xkcd.getCurrentComics()
	console.log(currentComics)
}

main()
```
