require('dotenv').config()

const { Client } = require('discord.js')

// create client
const client = new Client()

client.on('ready', () => {
	// client is ready
	console.log('Bot is listening!')
})

client.on('message', message => {
	// message received
})

// login with token
client.login(process.env.TOKEN)
