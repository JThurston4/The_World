const Raid = require("../models/raid");

const client = require('../client/client')


client.on("message", async (msg) => {
    if (msg.content === "!joinRaid") {
      let raider = await Raid.findOne({username: msg.author.username})
      if (raider) return msg.reply("you're already in the raid")
      
      raider = new Raid({username: msg.author.username});
      let saved = await raider.save()

      if (saved) {
        const raiders = await Raid.find()
        const names = raiders.map((r) => r.username)
        msg.reply(`${msg.author.username} added to raid party. \nCurrent raiders are: \n${names.join(',\n')}`);
      }
    }
  });

  client.on("message", async (msg) => {
    if (msg.content === "!raid") {
      const raiders = await Raid.find()
      if (!raiders.length) return msg.reply('Raid is empty')

      const names = raiders.map((r) => r.username)
      msg.reply(`\nCurrent raiders are: \n${names.join(',\n')}`);
    }
  });

  client.on("message", async (msg) => {
    if (msg.content === "!leaveRaid") {
      let deleted = await Raid.findOneAndDelete({username: msg.author.username})
      if (!deleted) return msg.reply("you weren't in the raid")

      const raiders = await Raid.find()
      if (raiders.length) {
        const names = raiders.map((r) => r.username)
        return msg.reply(`you left the raid.  Current raiders are: \n${names.join(',\n')}`);
      }
      msg.reply('you left the raid. \nNo more raiders')      
    }
  });

  client.on("message", async (msg) => {
    if (msg.content === "!clearRaid") {
      let deleted = await Raid.deleteMany({}, err => console.log(err))
      if (deleted) {
        msg.reply(`No more raiders`);
      }
    }
  });


module.exports = client;
