//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: BABLI YT" //ur yt chanel name
global.socialm = "GitHub: Saeedx303" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'BABLI-BOT-MD' //ur bot name
global.ownernumber = ['923361501800', 'Saeed', true], ['923477008403', 'Nisar', true], ['923137183974', 'Nham Noys', true]  //ur owner number
global.ownername = 'BABLIxBABLI' //ur owner name
global.websitex = "https://youtu.com/Babli"
global.wagc = "https://whatsapp.com/channel/0029VaE8GbCDzgTILE7OtC3e"
global.themeemoji = '🪀'
global.wm = "X Bot Inc."
global.botscript = 'https://github.com/Saeedx303' //script link
global.packname = "Small|Babli"
global.author = "ᗰᗩᗪE ᗷY BablixBablli"
global.creator = "9233361501800@s.whatsapp.net"
global.xprefix = '.'
global.premium = ['923361501800', '923137183974', '923477008403'] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '212' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the BABLI to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go Babli!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
