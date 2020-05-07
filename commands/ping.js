const client = require('../client/client')

client.on("message", async (msg) => {
  if (msg.content === "!ping") {
      const member = msg.guild.member(msg.author)
      try {
          let goodbye = await member.kick()
          if (goodbye) return msg.reply('Bye bye')
      } catch (err) {
          return msg.reply('Not enough power')
      }

  }
});

module.exports = client