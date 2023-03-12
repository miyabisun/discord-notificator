# discord-notificator

It acts as a WebAPI server that keeps running discord.js and keeps sending Notificatio.

## usage

It is distributed by docker, please download and use at Docker-Hub.

### environment

`TOKEN`

It acts as a WebAPI server that keeps running discord.js and keeps sending Notificatio.  
reference: https://discord.com/developers/docs/intro

### e.g. docker-compose.yml and Node.js

```yml
version: '3'
services:
  notificator:
    image: miyabisun/discord-notificator
    environment:
      TOKEN: MTxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ports:
      - 3000:80
```

```bash
$ docker-compose up -d
```

```bash
$ npm install node-fetch@2
```

```js
const fetch = require("node-fetch");

(async () => {
  # show channel ids
  const res = await fetch("http://localhost:3000/");
  const json = await res.json();
  # [{id: "12345678", name: "channel-name", category: "category-name"}]

  await fetch("http://locahost:3000/notice/12345678", {method: "POST", body: "test-notice"});
})();
```
