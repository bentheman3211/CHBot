const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_PRESENCE"], partials: ["CHANNEL"] });

client.on("ready", () => {
    console.log(`Ready and logged in!`)
    client.user.setActivity(`Do /help for help`, {type: "LISTENING"})
})

client.on('message', async message => {

    if (message.author.bot) return;
    message.channel.send("Hi!")
});
client.login("MTAyMjYwMDM1NTE3Mjg1MTg0Mg.G-05Cf.4rrkEEd6mLH85HLAhYi_tV_WaGCp2RkXOeptJM")
