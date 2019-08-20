const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Modérér Fortnite Tournament");
    console.log("Le Bot a bien été connecté");
});

bot.login("NjEzMzgzNjMxOTIyMjY2MTI1.XVwIWA.4JHnw1vVpA0iEe3qr5hqtN0mI8U");
