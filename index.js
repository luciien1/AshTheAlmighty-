import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {

  if (message.author.bot) return;

  // Cool automatic response
  if (message.content.toLowerCase() === 'ash the almighty') {
    message.reply('Ash the Almighty 👑');
  }

  // Wake command
  if (message.content.toLowerCase() === '!wake up ash') {
    message.reply('Ash the Almighty has awakened 👑🔥');
  }

  // Rules command
  if (message.content.toLowerCase() === '!rules') {

    const rulesEmbed = new EmbedBuilder()
      .setColor(0x2f3136)
      .setAuthor({ name: 'RISING ASHES' })
      .setTitle('CLAN RULES')
      .setDescription(`
• **No Exploiting**
Exploiting, cheating, or abusing glitches in any form is strictly prohibited.

• **No Vulgar Language Or Slurs**
Cursing, slurs, and inappropriate language are not allowed.

• **Respect Everyone**
All members and staff must be treated with respect at all times.

• **No Personal Questions**
Do not ask or pressure others for private information.

• **No Toxicity Or Threats**
Harassment or toxic behavior will not be tolerated.

• **No Misinformation**
Spreading false information is prohibited.

• **No Spamming**
Do not spam messages or flood channels.

• **No NSFW Content**
Inappropriate content is forbidden.

• **No Promotions**
No advertising other servers or games.

• **No Drama**
Avoid unnecessary conflicts.

• **No Exposing**
Sharing private information is prohibited.

• **No Unnecessary Staff Pings**
Do not ping staff for minor issues.

• **No Sensitive Topics**
Discussions related to self-harm or suicide are not allowed.

\n**Breaking rules may result in warnings, kicks, or bans.**
`)
      .setTimestamp();

    message.channel.send({ embeds: [rulesEmbed] });
  }

});

client.login(process.env.TOKEN);
