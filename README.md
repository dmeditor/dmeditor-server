DMEditor Server
========
A nextjs project which converts dmeditor data to html. It's typical to run this as an internal service.

### Dev
```
npm run dev
```

### Deploy
Deploy traditionally
```
npm run build
npm start
```

Deploy to Docker
```
docker build --tag dmeditor-server .

# When running, explose 3006 port
```

### Convert
Send a post request to http://localhost:3000/dmeditor, where body is dmeditor data. eg.
```json
[{
		"common": {
			"width": "530px"
		},
		"data": {
			"text": "",
			"url": "http://kz72asj137.dcp.dev.digimaker.no/var/images/j/jsj/upload-878788401-visual_editing.jpg"
		},
		"id": "a47IDKRO8LNbPo6EBtPLbs",
		"settings": {
			"fullScreen": false
		},
		"source": {
			"sourceType": "input"
		},
		"type": "image"
}

]
```

### Embed in project like PHP/.NET/etc
Embed the request result in html(remember to host .next/static to be \_next/static in production)
