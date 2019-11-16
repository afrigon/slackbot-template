require('dotenv').config();
const { App } = require('@slack/bolt');
const commands = require("./commands")

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

commands.register(app);

(async () => {
    await app.start(process.env.PORT || 3000);

    console.log('Sly is running! 🦅');
})();

