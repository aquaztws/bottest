const Discord = require("discord.js")
const client = new Discord.Client()
var DarKneSs = "DarKneSs#6433"
var tws = "tws#4511"
let prefix = "."

client.login("NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRkMQ.WPJDTqcJ9tlAzekLV7-HlX20BUg") 

//ready


client.on("ready"), () => {
    console.log("I'm ready");
};


//boualam
client.on("message", (message) => {
    if(message.content === "Yosh") {
        message.channel.send("Yosh m8")
}})

client.on("message", (message) => {
    if(message.content === "Boualam?")
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Oui le plus beau de tout les rebeux ?")

    } else {
		for (var i =0; i <= 1; i++) {

			message.channel.send("Je suis que l'esclave de Ronan et Patrice", + (message.reply("Fils de pute")))
			message.channel.send("Nordinne ni pas content vous michant")
		}
}})   
 

//toby

client.on("message", (message) => {
    if(message.content === "Toby?")
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("OUI MAITRE")

    } else {
		for (var i =0; i <= 1; i++) {

			message.channel.send("TOBY N'EST PAS TON ELFE ", + (message.reply("Fils de pute")))
			message.channel.send("TOBY EN COLERE")
		}
}})   

//toby2


client.on("message", (message) => {
    if(message.content === "Toby ça va ?")
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Non toby veut devenir un elfe libre")

    } else {
		for (var i =0; i <= 1; i++) {

			message.channel.send("TOBY N'EST PAS TON ELFE ", + (message.reply("Fils de pute")))
			message.channel.send("TOBY EN COLERE")
		}
}})   



//toby3



client.on("message", (message) => {
    if(message.content === "Toby libéré")
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("aller hop j'vous ai baisé ciao bye cimer")

    } else {
		for (var i =0; i <= 1; i++) {

			message.channel.send("TOBY N'EST PAS TON ELFE ", + (message.reply("Fils de pute")))
			message.channel.send("TOBY EN COLERE")
		}
}})   




//spam
client.on("message", (message) => {
      if(message.content.startsWith('.spam')) {
        

        let args = message.author.id


    if(args==='152450822221987840'|| args ==='335162289672159232'){


		
		let args = message.content.split(' ')
		args.shift()
		message.delete()
		for (var i = 0; i <=5 ; i++) {
			message.channel.send(args.join(' '))
        }

	}else{message.reply("T'es qui no namer?")
   }	
}    


})

//clear

client.on("message", (message) => {
    if(message.content.startsWith('.clear')) {
        let args = message.content.split(' ')
        args.shift()
 var numToPurge = args.shift()
        



		 if(!message.member.hasPermission("MANAGE_MESSAGES"))     return message.channel.send({embed: {
            color: 3447003,
            description: ":x: Tu n'as pas les permission "
        }})
        let channel = message.channel;

        
        if (numToPurge <= 0) {
            return message.reply('Le nombre de messages a purger doit être supérieur à 0');
        }

       
        else if (channel.type === 'text') {
            return channel.fetchMessages({limit: numToPurge})
                .then(messages => channel.bulkDelete(messages))
                .then(messages => message.reply(`Channel has been cleaned`))
                .catch(console.error);
        }
        else {
            return message.reply('...');
        }
    }
})


//google
client.on("message", (message) => {
    if(message.content.startsWith('.google')) {
     let args = message.content.split(' ')
    args.shift()
    message.delete()
    message.reply('https://www.google.fr/#q=' + args.join('%20'))
}})


