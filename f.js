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

  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {

    if  (msg.channel.type === 'dm') {

      const ozelmesajuyarii = new Discord.RichEmbed()

    .setColor(0x00AE86)

    .setTimestamp()

    .setAuthor(msg.author.username, msg.author.avatarURL);

    msg.author.sendEmbed(ozelmesajuyarii); }

    if (msg.channel.type !== 'dm') {

      const sunucubilgi = new Discord.RichEmbed()

    .setColor(0x00AE86)

    .setTimestamp()

    .setAuthor(msg.guild.name, msg.guild.iconURL)

    .addField('Ad:', msg.guild.name)

    .addField('ID', msg.guild.id)

    .addField('Ana kanal:', msg.guild.defaultChannel)

    .addField('Bölge', msg.guild.region)

    .addField('Üye sayısı:', msg.guild.memberCount)

    .addField('Sahibi:', msg.guild.owner)

    .addField('Kanal sayısı:', msg.guild.channels.size)

    .addField('Oluşturulma tarihi:', msg.guild.createdAt);

    return  msg.channel.sendEmbed(sunucubilgi);

    }

  }

});
client.on('message', msg => { 



if (msg.content === prefix + 'öyardım') { 



let embed = new Discord.RichEmbed() 



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 



.addField("KOMUTLAR", 



"DİKKAT: Botun düzgün çalışabilmesi için sunucuda 'fal' adına bir metin kanalı olmalıdır!") 



.addField("Ana Komutlar", 



"f!falyardım = Botun fal bakma özelliği ile ilgili her şey") 



.addField("Mod Komutları",  



"f!ekip = Bot ekibini gösterir. \nf!sunucular = Botun ekli olduğu sunucuları gösterir. \nf!bilgi = Bot bilgilerini gösterir. \nf!davet = Botu ekleme linkini gösterir. \nf!sunucubilgi = Sunucu bilgilerini gösterir. \nf!güncelleme = Bot güncellemelerini gösterir.") 



.addField("Eğlence Komutları", 



"f!avatar = Kullanıcı avatarını gösterir. \nf!konuştur = Bot söylediğinizi tekrarlar. \nf!yazıtura = Bot yazı tura atar.")



.setFooter("Bot yapımcısı: Emir#5218'dir.") 

.setFooter("Teşekkürler; NavMen, Hakkı Akyol") 



msg.member.send({embed: embed}) 



}



});
client.on('message', msg => { 







if (msg.content === prefix + 'nyardım') { 







let embed = new Discord.RichEmbed() 







.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 







.addField("KOMUTLAR", 







"DİKKAT: Botun düzgün çalışabilmesi için sunucuda 'fal' adına bir metin kanalı olmalıdır!") 







.addField("Ana Komutlar", 







"f!falyardım = Botun fal bakma özelliği ile ilgili her şey") 







.addField("Mod Komutları",  







"f!ekip = Bot ekibini gösterir. \nf!sunucular = Botun ekli olduğu sunucuları gösterir. \nf!bilgi = Bot bilgilerini gösterir. \nf!davet = Botu ekleme linkini gösterir. \nf!sunucubilgi = Sunucu bilgilerini gösterir. \nf!güncelleme = Bot güncellemelerini gösterir.") 







.addField("Eğlence Komutları", 







"f!avatar = Kullanıcı avatarını gösterir. \nf!konuştur = Bot söylediğinizi tekrarlar. \nf!yazıtura = Bot yazı tura atar.")







.setFooter("Bot yapımcısı: Emir#5218'dir.") 


.setFooter("Teşekkürler; NavMen, Hakkı Akyol") 




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

if (msg.content === prefix + 'falyardım') { 

let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField('Falına bakabilmem için fal türünüde yaz',

'Örneğin; "f!falbaktır rüya" = rüya falı bakar')

msg.channel.send({embed: embed})

}

});
client.on('message', msg => {

if (msg.content === prefix + 'falbaktır rüya') { 
let söz = msg.content.substring(2 + 9);
let embed = new Discord.RichEmbed() 

.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField(msg.author.username + söz + 'falına bakıyorum',

'Falına bakabilmem için sunucudaki "fal" kanalına f!rüyafalım ve rüyyanızda gördüğünüz ana tema veya nesneyi yazın. \nÖrneğin; f!rüyafalım tavşan (Kişi rüyasında tavşan görmüş)')

msg.channel.send({embed: embed})

}

});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım tavşan)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada tavşan görmek hayatta kazanılacak olan zaferlere, iş hayatındaki olumlu adımlara ve mutluluğa işaret eder. Rüyasında tavşan gören kişinin özel hayatı da hep yolunda gidecek demektir. Rüyada görülen tavşan aynı zamanda kadınla ifade edilir ve kız arkadaş, sevgili, nişanlı ya da eş olarak değerlendirilir. Rüyada beyaz bir tavşan görmek muhafazakâr, hoşgörülü, güler yüzlü ve yumuşak huylu bir kadına delalet eder. Tavşanın siyah renkli ve çok sevimsiz olması kötü huylu, kavgacı, anlayışsız ve kıskanç bir kadına işaret eder. Rüyada bir kimsenin tavşanının ölmesi çocuğunun hastalanmasına, bir sıkıntıya ya da zorluğa düşmesine delalet eder. Rüyada tavşanla konuştuğunu gören kişi toplumdan dışlanmış, yaramaz ve kötü kabul edilmiş bir kadınla tanışarak samimi olacak ve arkadaşlık kuracak demektir. Rüyada tavşanın çok hızlı koşuyor olması kimsenin bilmemesi ve öğrenmemesi gereken bir konu olacağına ve rüya sahibinin de bunu herkesten gizlemeye çalışacağına işaret eder.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım köpek)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Cafer-i Sadık rüyada köpek görmekle ilgili dört farklı anlama işaret eder. Kötü bir hasım, gözü tok bir erkek, güzel olmayan bir hizmetçi ve bilgisiz bir erkek. Rüyada köpek görmek, köpeği ne şekilde gördüğünüze göre anlamı değişen bir tabire sahiptir. Arzularına ve zevklerine düşkün bir kişiyi temsil edebileceği gibi düşman da olsa aynı zamanda şefkatli ve merhametli bir kimseyi de temsil edebilmektedir. Dişi köpek ise daha çok kötü karakterli bir kadına işaret eder. Bu tarz bir kadın başınıza bela açacaktır. Ancak genel olarak, yakın çevrenizdeki dostlarınıza ve düşmanlarınıza işaret eder. Rüyanızda köpeğe olan üstünlüğünüz veya galibiyetiniz düşmanlarınızla veya rakiplerinizle olan güç savaşının sonucunu gösterdiği gibi aynı zamanda gördüğünüz köpeğin cinsi de dost veya düşmanlarınız hatta sizin kendi karakteriniz hakkında fikirler verebilir.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım yılan)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada yılan görmek hakkında çok çeşitli yorumlar bulunmaktadır. Rüya tabirleri yılan için genellikle düşmanı işaret eder. Farkında olmadığınız bir düşmanınız olabilir. Bu düşman genellikle kendisini gizler ve sizden menfaat sağlamaya çalışır. Yılan sinsi ve her an saldırmayı bekleyen bir düşmanı işaret ettiği gibi, büyük zorluklarla karşılaşacağınız anlamına gelebilir. Bu rüya, yılan türlerine göre farklı anlamlara sahiptir. Bunu ayrıntılı olarak anlatmaya çalıştık. Rüyada yılan görmek bir diğer taraftan hayra yorumlanır. Maddi durumunuzun güçleneceğine, ailevi hayatınızda yenilikler yaşayacağınıza işarettir. Bir çocuk sahibi olabilir veya evlilikle sonuçlanacak bir ilişkiye başlayabilirsiniz.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım yalnızlık)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada yalnız kalmak, ne yazık ki iyi anlamlara gelmez ve hayırlı olan şeyleri çağrıştırmaz. Bu rüya, gerçek anlamına benzer şekilde tabir edilir ve kişinin çevresinde en fazla insan olması gerektiği zamanda durumun tam aksine kendisine el atacak kimselerin bulunmayacağına, çektiği eziyetle baş başa kalacağına, kime gideceğine, kimden akıl soracağına ve ne yapacağını bilemez olacağına işaret eder.')
		}
	});
client.login(process.env.BOT_TOKEN)
