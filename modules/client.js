const {Client, Events, GatewayIntentBits} = require("discord.js");

module.exports = config => {
  const client = new Client({intents: [GatewayIntentBits.Guilds]});
  const loggedIn = new Promise(resolve =>
    client.once(Events.ClientReady, resolve)
  );
  client.login(config.token);
  return {client, loggedIn};
};
