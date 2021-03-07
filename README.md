# Telegram Bot - Replying with chat id / group id

Sample Telegram Bot.

## Available Commands

* `/mychatid`: returns the user chat id if sent directly or, if sent from a group, the group id

Can be extended to implement other commands.

## How to install

* Deploy the application / Docker container online (it must be available on https)
* Create a new Bot using BotFather, using the command `/newbot` and take note of your token
* Add the available commands using the BotFather command `/setcommands`, sending a content like the one below

```text
mychatid - Send me back the chat id / group id
```

* Set a webhook POSTing the payload below to `https://api.telegram.org/bot<your bot token>/setWebhook`

```json
{
  "url": "https://<server><path>"
}
```

## How to use it

* to get a chat id:
  * write directly to your bot
  * you can now delete the chat with your bot (optional)
* to get a group id:
  * create a group, including your bot
  * send a message `/mychatid@<your bot>` within the group
  * you can now remove your bot from the group (optional)

## Environment variables

You can export the following environment variables, to customize the bot:

* `HTTP_PORT`: http port to listen to. Defaults to 8080.
* `ENDPOINT`: url path invoked by Telegram webhooks. Must be the same `<path>` used in `setWebhook`. Defaults to '/'.

## Docker usage

### With default values

Listening on `https://<your server>:8080`

```bash
docker run -p 8080:8080 paolodenti/chatidbot
```

### With custom values

Listening on `https://<your server>:443/mysecretpath`

```bash
docker run -p 443:8888 -e HTTP_PORT=8888 -e ENDPOINT="/mysecretpath" paolodenti/chatidbot
```
