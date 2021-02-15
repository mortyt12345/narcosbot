const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

///////////////////////eklendim atıldım

client.on('guildDelete', guild => {

    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTitle(" ATILDIM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('784906432419069962').send(Crewembed);
      
    });
    
    
    client.on('guildCreate', guild => {
    
    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("GREEN")
    .setTitle("EKLENDİM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('784906432419069962').send(Crewembed);
      
    });
    client.on('guildCreate', guild => {
        let virus = guild.channels.filter(c => c.type === "text").random()
        virus.send("Beni sunucuna eklediğin için tşk");
    });

    client.on("guildMemberAdd", member =>{
        const hg = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(member.guild.name + 'Sunucusuna Hoşgeldin!')
        .setDescription(`Sunucumuza katıldığın için teşekkürler :)`)
        .setFooter('Hoşgeldin')
        .setTimestamp()
        member.send(hg)
    })
    client.on("message", async msg => {
        const gereksiz = await db.fetch(`saas_${msg.guild.id}`);
        if (gereksiz === "aktif") {
          if (
            msg.content.toLowerCase() == "selam" ||
            msg.content.toLowerCase() == "selamun aleyküm" ||
            msg.content.toLowerCase() == "s.a" ||
            msg.content.toLowerCase() == "sea" ||
            msg.content.toLowerCase() == "sa" ||
            msg.content.toLowerCase() == "selamm" ||
            msg.content.toLowerCase() == "saa" ||
            msg.content.toLowerCase() == "saaa"
          )
              return msg.reply("Aleyküm selam hoşgeldin nasılsın?");
          } else if (gereksiz === "deaktif") {
        }
        if (!gereksiz) return;
      });
      client.on("message", mesaj=> {
  if (mesaj.content.toLowerCase() === "n!nitro-gen") {
    mesaj.channel.send(
      "https://nitrogen-en.glitch.me/"
    );
  }
});
client.on("message", mesaj=> {
    if (mesaj.content.toLowerCase() === "n!mc-gen") {
      mesaj.channel.send(
        "https://boomalts.com/minecraft/"
      );
    }
  });
  client.on("guildCreate", async guild => {
    guild.owner.send("beni sunucuna eklediğin için tşk");
  });
  client.on("guildDelete", async guild => {
    guild.owner.send("beni sunucundan neden attın?");
  });
  client.on("guildMemberAdd",  member =>{
    const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
    if (gereksiz === "aktif") {
    const hg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(member.guild.name + '\n Sunucusuna Hoşgeldin!')
    .setDescription(`Umarım sunucumuzda eğlenirsin! İyi vakit geçirmen dileği ile...`)
    .setFooter('Hoşgeldin')
    .setTimestamp()
    member.send(hg)
  }else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
  });
  ////////////////////
  client.on("guildMemberRemove",  member =>{
    const gereksiz = db.fetch(`dmhgbb_${member.guild.id}`);
    if (gereksiz === "aktif") {
    const hg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(member.guild.name + '\n Görüşürüz!')
    .setDescription(`Umarım bizimle vakit geçirirken mutlu olmuşsundur!`)
    .setFooter('Görüşürüz')
    .setTimestamp()
    member.send(hg)
  }else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
  });
  client.on("ready", async () => {
    log("Durum başarıyla ayarlandı")
       client.user.setActivity("🤔 n!yardım geliştirilme aşamasında", 
         { url: 'https://twitch.tv/.',
         type: 'STREAMING' }); 
 })
 client.on('ready', ()=>{
    client.channels.cache.get('810145736083111936').startTyping()
    })
    client.on('guildDelete', guild => {

        let plasmic = new Discord.MessageEmbed()
        
        .setColor("RANDOM")
        .setTitle(" Bot Kicklendi ")
        .addField("Sunucu Adı:", guild.name)
        .addField("Sunucu sahibi", guild.owner)
        .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
        .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
        .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
        
           client.channels.cache.get('785431902848679956').send(plasmic);
         
        });
        
        //--------------------------------------------------------//
        
        client.on('guildCreate', guild => {
        
        let plasmicc = new Discord.MessageEmbed()
        
        .setColor("RANDOM")
        .setTitle(" Bot Eklendi ")
        .addField("Sunucu Adı:", guild.name)
        .addField("Sunucu sahibi", guild.owner)
        .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
        .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
        .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
        
           client.channels.cache.get('785431902848679956').send(plasmicc);
        
        }); 
  
    
client.login(ayarlar.token);