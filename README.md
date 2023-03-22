This is a server(on nextjs) which covnerts dmeditor's data into html, inlcuding event like(tab).

## Run
npm run dev

## Convert
visit http://localhost:3000/dmeditor, POST dmeditor data. eg.
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

## Embed in project like PHP/.NET/etc
