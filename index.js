const Discord = require('discord.js')
const {token} = require('./config.json');
const client = new Discord.Client()
const prefix = "$";
const rando_emoji = [
	'<:ZZbrandt:627979657966256198>','<:Zwatler:627979370958422016>','<:Zwig:611306466053455905>','<:Zsungalsses:611310937231720460>','<:Zslenderman:609535688257306636>','<:Zdogebrandt:611306477788987392>','<:Zclown:626996876784173066>','<:Zbrandtwaa:609544408576163860>','<:Zbrandtsad:609539241881370624>','<:ZbigThink:611380380775350302>'
]
const rand_doge = [
	'<:Ydogetwinkie3:601245043667370054><:Ydogetwinkie2:601245043784679424><:Ydogetwinkie1:601245043818496040>',
	'<:Ydogetwinkie3:601245043667370054><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:Ydogetwinkie1:601245043818496040>',
	'<:Ydogetwinkie3:601245043667370054><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:Ydogetwinkie1:601245043818496040>',
	'<:Ydogetwinkie3:601245043667370054><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:Ydogetwinkie1:601245043818496040>',
	'<:Ydogetwinkie3:601245043667370054><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:YAdogetwinkie1:627000764497133568>',
	'<:Ydogetwinkie3:601245043667370054><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:YAdogetwinkie1:627000764497133568>',
	'<:Ydogetwinkie3:601245043667370054><:YAdogetwinkie1:627000764497133568>',
	'<:YAdogetwinkie3:627002317920665601><:Ydogetwinkie1:601245043818496040>',
	'<:YAdogetwinkie3:627002317920665601><:YAdogetwinkie2:601245043784679424><:Ydogetwinkie2:601245043784679424><:Ydogetwinkie1:601245043818496040>',
	'<:YAdogetwinkie3:627002317920665601><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:Ydogetwinkie2:601245043784679424><:YAdogetwinkie2:627001399980589076><:YAdogetwinkie1:627000764497133568>'
]

client.on('message', message => {
	
	var msg = message.content
	
	if (msg.toLowerCase().includes("snacks")) {
		message.channel.send('*SNACKS!!!! these bitches use to be bussin! They use to think i was plain hide n seek but i was really in the bushes eatin dese mfs*');
	}
	if (msg === 'walter') {
		const Xwalter = client.emojis.get("608709784257953814");
		message.channel.send('**I LIKE FIRE TRUCKS AND MOSTER TRUCKS**');
		message.channel.send('<:Xwalter:608709784257953814>');
		message.channel.send('**WALTER**');
	}
	if (msg.startsWith(prefix + "brandt")) {
		var randomAnswer = rando_emoji[Math.floor(Math.random() * rando_emoji.length)];
		message.channel.send(randomAnswer);
	}
	if (msg.startsWith(prefix + "twinkie")) {
		var randomDoge = rand_doge[Math.floor(Math.random() * rand_doge.length)];
		message.channel.send(randomDoge);
	}
	
	if (msg.content.includes("mood")) {
		if(message.author.bot) return;
		var randomAnswer = rando_emoji[Math.floor(Math.random() * rando_emoji.length)];
		message.channel.send("The mood is: " + randomAnswer);
	}
	
	if (msg === "listemojis") {
		const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
		message.channel.send(emojiList);
}
	/*if (message.content.includes("brandt")) {
		message.channel.send('<:Xwalter:608709784257953814>');
	} */
	if (!msg.startsWith(prefix)) return;
 
	if (msg.startsWith(prefix + "ping")) {
		message.channel.send("pong!");
	}
	if (msg.startsWith(prefix + "avatar")) {
		// Send the user's avatar URL
		message.channel.send(message.author.avatarURL);
	}
});

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});



client.login(token);
