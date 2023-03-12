const config = {
  port: Number(process.env.PORT ?? 80),
  token: process.env.TOKEN,
};

if (!config.token) {
  console.error("ERROR!");
  console.error("");
  console.error("The environment variable TOKEN is required for operation.");
  console.error("please go to the Discord Developer Portal to obtain the Bot's Token.");
  console.error("");
  console.error("https://discord.com/developers/docs/intro");
  process.exit(1);
}

module.exports = config;
