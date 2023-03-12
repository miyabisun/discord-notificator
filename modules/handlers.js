const fastify = require("fastify");

module.exports = client => {
  const app = fastify({logger: true});

  app.get("/", async (request, reply) =>
    client.channels.cache
      .filter(it => it.type === 0)
      .map(({id, name, parentId}) => ({
        id, name,
        category: parentId ? client.channels.cache.get(parentId)?.name : null,
      }))
  );

  app.post("/notice/:id",
    {schema: {type: "string"}},
    async (request, reply) => {
      const channel = client.channels.cache.get(request.params.id);
      if (!channel) {
        throw "No channels matching ID found.";
      }
      if (request.body === "") {
        throw "Specify the string to be sent in the body.";
      }
      channel.send(request.body);
      return {id: request.params.id, body: request.body}
    }
  );

  return app;
}
