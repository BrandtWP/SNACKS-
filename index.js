const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'snacks') {
    msg.reply('SNACKS!!!! these bitches use to be bussin! They use to think i was plain hide n seek but i was really in the bushes eatin dese mfs')
	message.channel.send('SNACKS')
  }
  if (msg.content === 'walter') {
    msg.reply('i like fire trucks and moster trucks')
	msg.reply('walter')
  }
})

client.login('NjMwNTEwNDY5MTg2MzIyNDQy.XZpXxw.8_tadFPsp35chyceXnHfApl5fp4')