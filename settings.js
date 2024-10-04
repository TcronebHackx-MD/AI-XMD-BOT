

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: TcronebHackx-MD" //ur yt chanel name
global.socialm = "GitHub: TcronebHackx-MD" //ur github or insta name
global.location = "Zimbabwe, Harare, Epworth" //ur location

//new
global.botname = '© AI-BOT-XMD' //ur bot name
global.ownernumber = ['263716394979'] //ur owner number, dont add more than one
global.ownername = '© Tcroneb~Hackx' //ur owner name
global.websitex = "https://www.youtube.com/@AI-BOT-MD"
global.wagc = "https://whatsapp.com/channel/0029Vafg8mVLtOj6eAvlZO0w"
global.themeemoji = '🪀'
global.wm = "Global Bot Inc."
global.botscript = 'https://github.com/TcronebHackx-MD/AI-BOT-XMD' //script link
global.packname = "Sticker By"
global.author = "TcronebHackx-MD\n\n+263716394979"
global.creator = "263716394979@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["263784818639"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
