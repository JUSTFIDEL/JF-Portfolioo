require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
const app = express()
// const mailchimp = require('@mailchimp/mailchimp_marketing')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/success', (req, res) => {
	res.sendFile(__dirname + '/success.html')
})

app.get('/failure', (req, res) => {
	res.sendFile(__dirname + '/failure.html')
})

app.post('/', (req, res) => {
	const name = req.body.name
	const email = req.body.email
	const subject = req.body.subject
	const message = req.body.message

	// const data = {
	// 	members: [
	// 		{
	// 			email_address: email,
	// 			status: 'subscribed',
	// 			merge_fields: {
	// 				FNAME: name,
	// 			},
	// 		},
	// 	],
	// }

	// const jsonData = JSON.stringify(data)

	// const url = 'https://us17.api.mailchimp.com/3.0/lists/' + process.env.SERVER

	// const options = {
	// 	method: 'POST',
	// 	auth: 'justfidel:' + process.env.API_KEY,
	// }

	// const request = https.request(url, options, response => {
	// 	if (response.statusCode === 200) {
	// 		res.sendFile(__dirname + '/success.html')
	// 	} else {
	// 		res.sendFile(__dirname + '/failure.html')
	// 	}

	// 	response.on('data', data => {
	// 		console.log(JSON.parse(data))
	// 	})
	// })

	// request.write(jsonData)
	// request.end()

	if (res.statusCode === 200) {
		res.sendFile(__dirname + '/success.html')
		// res.redirect('/')
	} else {
		res.sendFile(__dirname + '/failure.html')
		res.redirect('/')
	}
})

app.post('/success', (req, res) => {
	res.redirect('/')
})

app.post('/failure', (req, res) => {
	res.redirect('/')
})

app.listen(process.env.POST || 3000, () => {
	console.log('Server started on port 3000')
})
