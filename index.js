const Discord = require('discord.js')
const {token} = require('./config.json');
const client = new Discord.Client()
const prefix = "$";

client.on('message', message => {
	if (message.content === 'snacks') {
		message.channel.send('*SNACKS!!!! these bitches use to be bussin! They use to think i was plain hide n seek but i was really in the bushes eatin dese mfs*');
	}
	if (message.content === 'walter') {
		const Xwalter = client.emojis.get("608709784257953814");
		message.channel.send('**I LIKE FIRE TRUCKS AND MOSTER TRUCKS**');
		message.channel.send('<:Xwalter:608709784257953814>');
		message.channel.send('**WALTER**');
	}
	if (message.content === "listemojis") {
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
		message.channel.send(emojiList);
}
	if (!message.content.startsWith(prefix)) return;
 
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send("pong!");
	}
});

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});



client.login(token);