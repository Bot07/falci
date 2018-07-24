const embed = require('discord.js'); 

const Discord = require('discord.js'); 

const client = new Discord.Client();

var prefix = 'f!' 

client.on("ready", () => {client.user.setGame('f!yardım | Falına bakmamı ister misin? | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 



}); 



client.on('ready', () => { 



   console.log(`Bot${client.user.tag} adı ile giriş yaptı!`); 



 }); 




client.on('message', msg => { 



if(msg.content === prefix + 'yardım') { 



let embed = new Discord.RichEmbed()  



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  



.addField("2 çeşit yardım menüm var", 



"Özel mesaj (Yardım menüsünü özel mesaj olarak atar.)\nNormal yardım (Sunucudaki chate atar.)\n**Özel mesaj için = f!öyardım**\n**Normal yardım için = f!nyardım**") 




msg.channel.send({embed: embed})  



} 



});

client.on('message', msg => { 



if(msg.content === prefix + 'öyardım') { 



let embed = new Discord.RichEmbed()  



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  



.addField("Özel mesaj olarak gönderdim", 



"Özel mesajlarını kontrol et! :postbox:") 



msg.channel.send({embed: embed})  



} 



});
client.on('message', msg => { 



if (msg.content === prefix + 'öyardım') { 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField("KOMUTLAR", 



"Tüm komutlar burada ->") 



.addField("Ana Komutlar", 



"f!fal") 



.addField("Mod Komutları",  



"f!fal") 



.addField("Eğlence Komutları", 



"f!fal")



.setFooter("Bot yapımcısı: Emir#5218'dir.") 



msg.member.send({embed: embed}) 



}



});
client.on('message', msg => { 







if (msg.content === prefix + 'nyardım') { 







let embed = new Discord.RichEmbed() 







.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 







.addField("KOMUTLAR", 







"Tüm komutlar burada ->") 







.addField("Ana Komutlar", 







"f!fal") 







.addField("Mod Komutları",  







"f!fal") 







.addField("Eğlence Komutları", 







"f!fal")







.setFooter("Bot yapımcısı: Emir#5218'dir.") 






msg.channel.send({embed: embed})   







}







});
client.on('message', msg => {

if (msg.content.toLowerCase().match(/(ping)/g)) {

msg.reply(`Pong! ${client.ping/1000} saniye`);	



}

});
client.on('message', msg => {



if (msg.content === prefix + 'davet') { 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField("Beni Eklemek İçin Tıkla",  



"https://goo.gl/CTCyZR") 



.addField("Fal Dükkanıma Gelmek İçin Tıkla",  



"https://discord.gg/89j8fNX")   



msg.channel.send({embed: embed}) 



} 



});
client.on('message', msg => {



if(msg.content.startsWith(prefix + 'tavsiye')){ 



if(msg.author.id != 413346140768043018){ 

  let söz = msg.content.substring(2 + 7);

client.users.get('368450660036771850').send(msg.author.username + ' adlı kişinin tavsiyesi: ' + söz); 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField('**Bot Sahibine şunu tavsiye ettiniz: **' + söz + '\n**Tavsiyeniz bot sahibine iletildi.**', 



'***En yakın zamanda dönüş alacaksınız.***'); 



client.channels.get("401633988726226956").send(msg.author.username + '** şunu tavsiye etti: **' + söz );   



msg.channel.send({embed: embed}) 



}} 



});


 client.on('message', msg => {



   if (msg.content.startsWith(prefix + "konuştur")) {



    if (msg.channel.type !== "dm"){

	    msg.delete (msg.content == 'konuştur')



    let söz = msg.content.substring(2 + 9);



	



   let embed = new Discord.RichEmbed()



    .setColor(3447003)



	.setDescription(söz)



return msg.channel.send({embed})}



   }







});
client.on('message', msg => {



if (msg.content === prefix + "avatar") { 



let embed = new Discord.RichEmbed() 



.setAuthor(msg.author.username, msg.author.avatarURL)



.setColor(3447003) 



.setImage(msg.author.avatarURL) 



return msg.channel.send({embed})} 



});
client.on('message', msg => {



if (msg.content === prefix + 'ekip') { 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField("Falcılar", 



"https://fliegeryapim.weebly.com/") 



msg.channel.send({embed: embed}) 



} 



});
client.on('message', msg => {



if(msg.content === prefix + 'sunucular'){ 



msg.channel.send(client.guilds.map(g => g.name)) 



} 



});

client.on('message', msg => {



if(msg.content === prefix + 'bilgi'){ 



if(msg.author.id != 414353271474487298){ 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField('**Sunucu Sayım:**', 



'\n'+ client.guilds.size);  



msg.channel.send({embed: embed})	 



}} 



});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `yazıtura`) { 



var sans = ["Yazı", "Tura"]; 



var sonuc = sans[Math.floor((Math.random() * sans.length))]; 



msg.channel.send(`**Sonuç: ${sonuc}**`); 



} 



});
client.on('message', msg => {



if(msg.content.startsWith(prefix + 'falbaktır')){ 



if(msg.author.id != 413346140768043018){ 

let söz = msg.content.substring(2 + 9);
client.channels.get("471284019414302721").send(msg.author.username + 'adlı kişinin' + söz + 'falı'); 
let embed = new Discord.RichEmbed()   





.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField('Falına bakıyorum', 



'Falına sunucudaki "fal" adlı kanladan öğrenebilirsin'); 

msg.channel.send({embed: embed}) 


}} 



});
client.on('message', msg => {
if(msg.content.startsWith(prefix + 'falyardım')){ 



let embed = new Discord.RichEmbed()   





.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField('Falına bakabilmem için fal türünüde yaz',
	  'Örneğin; "f!falbaktır rüya" = rüya falı bakar')

msg.channel.send({embed: embed}) 
});
client.login(process.env.BOT_TOKEN)
