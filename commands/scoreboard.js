const { Blocks, Markdown } = require('../slack-blocks');

module.exports = app => {
    app.message(/(sb|scoreboard) ls/i, async ({ context, say }) => {
        const blocks = Blocks([
Markdown(`
\`\`\`
r0 - Ringzer0
rootme - RootMe
\`\`\`
`)
        ]);

        say(blocks);
    });
};

