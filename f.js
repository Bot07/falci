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
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım deniz)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada deniz görmek maddi olarak rahatlamaya ve bereketlenmeye işaret eder. Yatırım yapabilir, yeni eşyalar alabilir veya para biriktirebilirsiniz. Ayrıca paranızın bereketi de artar. Yeni kazanç kapıları açılabilir. Rüyasında deniz gören kişinin gönlünde ne varsa gerçekleşir. Amaçlarına kolayca ulaşır, deniz gibi zengin ve renkli bir yaşam sürer diye tabir edilir. Rüyada deniz görmek kazancınızın artacağına işaret etmektedir. Rüyada görülen deniz çoğunlukla hayra yorulur. Güzel bir deniz manzarası görmeniz manevi hayatınızdaki yükselmeye ve derinden gelen huzura delalet eder. Denizde dalgalar olsa bile hayırlı anlamı değişmez. Eğer deniz size uzak kalmışsa, feraha erene kadar biraz sıkıntı çekeceksiniz demektir. Denizi gönül rahatlığıyla izlemeniz içten gelen huzuru işaret eder. Deniz ayrıca günah işleyen bir kimse için günahlardan pişman olarak tövbe etmeye de yorulmaktadır. Bu rüyayı gören kişi bir kafir ise dine dönecektir. Rüyasında bir yolculuğa çıktığını ve denizin yolu üzerinde bir engel oluşturduğunu gören kimse, planladığı yolculuğa çıkamaz.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım bebek)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada bebek görmek mutluluk ve neşenin habercisidir. Bazen rüyanızda bebek görmüş olsanız bile bu rüya size iç sıkıntısı verebilir. Bu gibi durumlarda olumsuz düşünmeye gerek yoktur. Rüyada bebek görmek her zaman iyiye yorulmaktadır. Bebek özellikle şansı simgeler. Şanslı günlerin kapıda olduğunun habercisidir. Beklemedeğiniz kapılar size açılabilir, gündemde olmayan maddi gelirler ortaya çıkabilir. İçgüdülerinize ve fikirlerinize güvenmelisiniz zira bu dönemde aklınıza gelen fikirler size fayda sağlayacaktır. Gireceğiniz işlerde şansınız yüksek olacaktır. Bu rüyanın bir çok güzel anlamı vardır. Etrafınızdaki insanlardan göreceğiniz faydalar da söz konusu olabilir. Ayrıca bebek, doğumdan sonra ortaya çıkan mucizevi bir varlık olduğundan rüyalarda yeni oluşan durumları, işleri, gelir kapılarını, dostlukları ve aşkı da simgeleyebilir. Rüyada görülen bebek neşenin, huzurun ve mutluluğun sembolüdür. Bazı durumlarda rüya, bebeğin nasıl görüldüğüne göre farklı şekillerde de tabir olunmaktadır. Örneğin mutlu ve güzel bir bebek feraha ermeye delalet ederken, ağlayan bir bebek  içinizdeki pişmanlıkların sembolü olabilir. Aşağıda rüyada bebeğin görülme şekillerine göre, çeşitli tabirler yer almaktadır. Rüyanızda gördüğünüz diğer nesneler ve olaylarla birlikte yorumladığınızda rüyanızın size ne anlatmaya çalıştığını çok daha net anlayabilirsiniz. Rüyanızda bebek sevdiğinizi görmeniz, alacağınız güzel haberlerin müjdecisidir.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım fare)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada fare görmek pek iyiye ve hayırlara işaret değildir. Rüyada görülen fare sağlığa delalet eder. Bunun yanı sıra maddi zarar ve kayıplar anlamına gelir. Örneğin iş hayatında hayal kırıklıkları ve başarısızlıklar gibi. Rüyasında fare gören kişi ortada hiçbir şey yokken aniden hastalanabilir ve yatağa düşebilir. Hane içinde dolaşan fare kişinin maddi zarara uğrayacağına işaret eder. Rüyada fare görmek aynı zamanda kötü huylu, haset bir kadın anlamına gelir. Buna karşın çok fazla fare görmek rızık olarak tabir edilir. Rüyasında evinde farelerin gezindiğini gören kişinin evinde bolluk bereket olur. Bu rüya aynı zamanda kişinin o yıl süresince ucuzluğu ve bereketi yakalayacağının işaretidir. Eğer kişi rüyasında fareyi bulunduğu yerden çıkarken görürse o halde bu rızkın ve bereketin azalacağına işaret eder. Gündüz gözüyle yani gündüz uykusunda görülen fare rüyada sürekli olarak geziyorsa bu uzun ömre işaret eder. Fare eğer evde bir yeri kemirip oyuk açarsa bu eve girecek hırsıza işaret eder.  Bir kişi rüyasında fare yakalar ya da bir faresinin olduğunu görürse bu yine kötü huylu bir kadın anlamına gelir.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım ağlamak)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada ağlamak, bazen mutlulukla yorumlanırken bazen de kederle yorumlanmaktadır.  Rüya tabirleri rüyanın nasıl gözüktüğüne ve rüyada görülen diğer şeylere bağlı olarak yapılmaktadır. Dolayısı ile bu noktada rüyanızda gördükleriniz önem kazanır. ')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım balık)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada balık görmek genel olarak hayırla yorumlanmaktadır. Rüyada balık görmek en çok kısmetlerin habercisidir. Size gelecek kısmetler, mal ve mülkler balık sembolüyle rüyanızda size görünürler. Balık görülen rüyalar en hayırlı rüyalar arasında yer almaktadır. Cafer-i Sâdık’a göre rüyada balık görmek tabirleri altı şekilde yapılmaktadır. Rüyada görülen balık, mevki sahibi bir kimseyi, bakire bir kızı, gelecek ganimeti, hizmetçiyi, askeri ve ganimeti simgelemektedir. Danyal (A.S)’a göre balık eğer sıcak bir yerde görülmüşse zorluk çekeceğinize, soğuk bir yerde görülmüşse iyi şeylerle karşılaşacağınıza işaret eder.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım para)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada para görmek, söylenen sözlerden görülecek zararlara işaret eder. İşiteceğiniz sözler sizin canınızı fazlasıyla sıkabilir. Bazı rüya tabircilerine göre ise etrafınızda sizinle ikiyüzlüce konuşan insanlar olduğuna yorulmaktadır. Alternatif olarak, rüyada para görmek gelecek nimetlerin habercisidir. Bu rüyayı gören kişinin geçimi rahatlar. İç sıkıntıları geçer. Ayrıca yapacağı ufak yardımlar ve ibadetler fazlasıyla ödüllendirilir. Ayrıca, rüyada para görmek, etrafınızdaki ikiyüzlülere karşı sizin edeceğiniz laflara da yorulmaktadır. Genellikle para rüyaları dedikodulara, size söylenen kötü sözlere ya da sizin söyleyeceğiniz kötü sözlere işaret eder. Rüyasında üzerinde Allah’ın adının yazdığı paralar görmek, rüya sahibinin kuran okumaya nazaran diğer ibadetlere ağırlık vereceğinin habercisidir. Para bazen de çekilecek sıkıntılara işaret eder. Maddi ya da manevi zorluklar kapınızda olabilir. Bazı yorumcular ise bu sıkıntının hemen ardından büyük sevinçler yaşanacağını da söylemiştir. Bir diğer rüya tabirine göre ise bu rüya yakın zamanda elde edeceğiniz paraya işaret eder.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım öpmek)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada öpmenin görülmüş olması etrafındaki düşmanlara diş geçirmeye ve onlara galip gelmeye işaret edilmektedir. Genç bir erkek veya bayanın öpülmesi sevinçli bir haber almaya, Yaşlı bir kadının öpülmesi geçmişte yaptığı bir hatadan dolayı birinden özür dileme şeklinde yorumlanmaktadır. Bir kadının öpülüyor olması sevdiği insandan ilgi ve şefkat görmediğine ama bu beklenti içerisinde olduğuna işarettir. Bir kişi sevdiğinin dudaklarından öptüğünü görüyor ise büyük bir paranın geleceği düşünülmektedir. Sevdiğini yanağından ve anlından öpen kişi ise helal para kazanıyordur ve bunu yiyordur. Gösterişli bir kadını öptüğünü gören erkek dul bir bayan ile aynı yatakta yatacaktır. Şeklinde yorumlanmaktadır. Bir hizmetliyi öpmek ise patronu ile sıcak ilişkiler yaşamaya delalet etmektedir. Bir kadının bir erkeği öptüğünü görmesi ve onunla çok samimi olması dünya hayatında gerçekleşmesini çok istediği bir şeyin gerçekleşeceğine haber verir.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım haberalmak)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada haber almak, gerçek anlamına benzer şekilde yorumlanır. Rüya sahibinin çok istediği bir olayın gerçek olması için beklediği müjdenin gelmesine işaret eder. Büyük mutluluk ve sevinç anlamına gelir. Rüya sahibi için eli kulağında olan, ha geldi ha gelecek güzel bir habere işaret eder. Rüyada haber almak, genel olarak güzel sözler duymaya, sürpriz gelişmeler yaşamaya ve çok mutlu olmaya delalet eder.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım şapka)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada şapka takmak, rüyayı gören kişinin yapacakları sayesinde toplum içinde kendisine olan bakış açısının önemli oranda değişeceği, herkesin saygı duyduğu, önünde eğildiği ve güzel sözlerle andığı kimse olacağı ve mesleğinden de tepelere tırmanacağı anlamına gelir. Zoru ve imkânsızı başarmaya bu sayede gücünü ve kararlılığını göstererek, kendini ispat etmeye tabir edilir ve rüya sahibi için hayır olarak kabul edilir. Rüyada şapka takmak, rüyada görülen şapkanın durumuna göre iki farklı şekilde yorumlanır. Eğer rüyada yeni bir şapka görülmüşse, rüyayı gören kişinin, iş hayatında çok büyük çalışmalar yapacağına, sorunlarından kısa bir zaman içine kurtulacağına, çok büyük ve hayırlı bir aşka yelken açacağına ve çok mutlu olacağına alamet eder. Eğer eski bir şapka görülmüşse, rüya sahibinin çok büyük üzüntüler yaşayacağına, sıkıntılardan ötürü çok zor zamanlar geçireceğine, maddi ve manevi olarak büyük sorunlar yaşayacağına ve çok endişeli bir kişi olacağına')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım jaguar)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada jaguar görmek, tabir yerindeyse alacası içinde saklı olan bir kimseye işaret eder. Yani rüya sahibinin çevresindeki art niyetli, ikiyüzlü, samimiyetsiz ve güvenilmeyecek kişilerin varlığına delalet eder. Rüya sahibinin yüzüne gülen ama arkasından da kuyusunu kazmak ve ayağını kaydırmak için elinden geleni yapan, fitneci ve fesat bir kimsenin varlığına işaret eder.')
		}
	});
client.on('message', msg => {
	
	if(msg.author.bot) return;
		
		if (msg.content.toLowerCase().match(/(f!rüyafalım labirent)/g)) {
			if(!msg.guild) return;
const channel = msg.guild.channels.find('name', "fal")
channel.send('Rüyada labirent görmek, rüya sahibinin, yaptığı işte detaylara indiği için sorun yaşadığına, bu yüzden zaman ve para kaybettiğine ve sorunu çözmek için daha fazla emek vermesi gerektiğine delalet eder. Aynı zamanda, rüyayı gören kişinin, kısa zaman içinde olmasa bile yaşanan sıkıntılardan kurtulacağına ve sorunlarının üstesinden geleceğine işaret eder.')
		}
	});
client.login(process.env.BOT_TOKEN)
