const commands = require('./commands.json');
const client = require('../client/client')


client.on("message", async (msg) => {
    if (msg.content === "!help") {
        let output = `\n`
        for (let key in commands) {
            output += `${key} - ${commands[key]}\n`
        }
        msg.reply(output);
    }
  });

module.exports = client