module.exports = {
    Blocks: blocks => ({ blocks }),
    Markdown: text => ({
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": text
        }
    })
};
