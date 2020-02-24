const Discord = require("discord.js")
const client = new Discord.client()
let prefix = "!"

module.exports = class toby extends command {
	static  match(message) {


		return message.content.startsWith('Toby?')
	}


	static action (message){
		 if (message.member.hasPermission("ADMINISTRATOR")){
		 	message.channel.send("OUI MAITRE")
	} else {
		for (var i =0; i <= 5; i++) {

			message.channel.send("TOBY N'EST PAS TON ELFE " + (message.reply("")))
			message.channel.send("TOBY EN COLERE")
		}
	}


}

}