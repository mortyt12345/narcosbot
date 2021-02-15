const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Narcos Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/801805661527998515/810225537611595796/Free_Sample_By_Wix.jpg?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](yakında)** **•** **[Botun Davet Linki]( yakında)** **•** **[Web-Site](yakında)**
Bir komut hakkında detaylı __yardım için__: **yakında!**`)

.addField('**• Komutlar**')
.addField('> yakında! ',' yakında!')
.addField('> yakında! ',' → yakında!')
.addField('> yakında!',' → yakında!')
.addField('> yakında!','  → yakında!')
.addField('> yakında! ',' → yakında!')
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'm!eğlence'
};