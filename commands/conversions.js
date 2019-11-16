module.exports = app => {
    app.message(/hex (\w*)/i, async ({ context, say }) => {
        const string = context.matches[1];
        const num = parseInt(string);
        if (!num) return;

        const value = num.toString(16);
        say(`\`0x${value}\``);
    });
};

