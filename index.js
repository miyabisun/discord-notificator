const config = require("./modules/config");
const {client, loggedIn} = require("./modules/client")(config);
const app = require("./modules/handlers")(client);

(async () => {
  try {
    await loggedIn;
    await app.listen({port: config.port, host: "0.0.0.0"});
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
