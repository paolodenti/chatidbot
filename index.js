// Dependencies
var express = require("express");
var http = require("http");

const port = process.env.HTTP_PORT ?? 8080;
const endpoint = process.env.ENDPOINT ?? "/";

const main = async () => {
    const app = express();
    app.use(express.json());

    app.post(endpoint, (req, res) => {
        const sentMessage = req.body.message?.text?.trim().split(/@/)[0];
        const chatId = req.body.message?.chat?.id;
        const from = req.body.message?.from?.first_name ?? "";

        switch (sentMessage) {
            case "/mychatid":
                res.status(200).send({
                    method: "sendMessage",
                    chat_id: chatId,
                    text: `Hi ${from}, your chat id is ${chatId}`
                });
                break;

            default:
                res.sendStatus(202);
                break;
        }
    });

    app.use((_req, res) => {
        res.sendStatus(200);
    });

    // start server
    const server = http.createServer(app);
    server.on("error", function (error) {
        console.log(error.message);
        return;
    });

    server.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

main().catch(error => {
    console.log(error.message);
});
