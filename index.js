var TelegramBotApi = require('node-telegram-bot-api');
var bot = new TelegramBotApi(process.env.TLGRM_TOKEN, {polling: true});

bot.onText(/\/cat(.*)/, function (msg, match) {
    var fromId = msg.from.id;
    var photo = 'cat.jpg';
    bot.sendPhoto(fromId, photo, {caption: 'Lovely kittens'});
});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, msg.text, {caption: "I'm a bot!"});
});