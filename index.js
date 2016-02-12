var TelegramBotApi = require('node-telegram-bot-api');
var bot = new TelegramBotApi(process.env.TLGRM_TOKEN, { port: process.env.PORT });

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, msg.text, {caption: "I'm a bot!"});
});