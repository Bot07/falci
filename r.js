const embed = require('discord.js'); 

const Discord = require('discord.js'); 

const client = new Discord.Client();

var prefix = 'r!' 

client.on("ready", () => {client.user.setGame('k!yardım | Oralet :D | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 

}); 

client.on('message', msg => { 

if (msg.content === prefix + 'yardım') { 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField("Ben sadece bir test botuyum :cry: Oralet <3",

"İşte, Oralet'in komutları")

.addField("KOMUTLAR", 

"tüm komutlar burada ->") 

.addField("Ana Komutlar", 

"o!bilgi = Botun bilgilerini gösterir. \n o!istatistik = Botun istatistiklerini gösterir. \n o!davet = Botun ekleme linkini gösterir. \n o!sunucular = Haraca bağlanan sunucular. \n o!tavsiye = Tavsiyenizi iletir. ") 

.addField(":cry: Mod Komutları :hammer: ",  

"\n o!temizçek = Kanalı tamamen temizler. \n o!temizle <sayı> = Belirtilen sayı kadar mesaj siler.") 

.addField(":joy: Eğlence Komutları :stuck_out_tongue: ", 

"*\n o!yazıtura = Yazı tura atar şansına ne gelirse.\n o!havalıyürü = Havalı yürür. \n o!havalıyumruk = Havalı bir şekilde yumruk atar.\n o!selamla = Politakacı gibi selamlar. \n o!tokatla = Birini tokatlar. \n o!topuğunasık = Birinin topuğuna sıkar. \n o!avatar = Profil fotoğrafını gösterir. \n o!yanıyorsunfuatabi = Dene de gör! \n hıyar = Şimdi yedim ulan seni!") 

.setFooter(`Bot yapımcısı: Emir | AgentSLayer#5218'dir`) 

msg.member.send({embed: embed}) 

}

});

client.on('message', msg => { 

if(msg.content === prefix + 'yardım') { 

let embed = new Discord.RichEmbed()  

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  

.addField("Özel mesaj olarak gönderdim", 

"Özel mesajlarını kontrol et! :postbox:") 

msg.channel.send({embed: embed})  

} 

});

client.on('message', msg => { 

if(msg.content.toLowerCase() === 'rakı') { 

let embed = new Discord.RichEmbed()  

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  

.addField("Hadi gözüm!", 

"Bir duble?") 

msg.channel.send({embed: embed})  

} 

});







client.login(process.env.BOT_TOKEN)
