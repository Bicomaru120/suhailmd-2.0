const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://immanueladebayo302:Xx9KSHbTRbYTZT9W@cluster0.zca9hz8.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://immanueladebayo302:Xx9KSHbTRbYTZT9W@cluster0.zca9hz8.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349065102361";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_43_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYyLFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwVHR6bUUraDlIdzJCTkM4S2R6YnNrM3FzWHNVcURFSWdjR0pmbTVKNUtVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoMDZ2THVnbVNiMlFCWGZRODZmMU1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxYWEzMGY0LTM0MmQtNDk0ZC04N2IwLWZiZTcxYjMxZGY1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAyOCxcbiAgICAgIDIsXG4gICAgICAxNjMsXG4gICAgICAxNTQsXG4gICAgICAxMjcsXG4gICAgICA0MixcbiAgICAgIDU0LFxuICAgICAgMTY2LFxuICAgICAgMTIyLFxuICAgICAgMjU0LFxuICAgICAgMjQ4LFxuICAgICAgMjAzLFxuICAgICAgMjMyLFxuICAgICAgODUsXG4gICAgICA5LFxuICAgICAgMTA1LFxuICAgICAgNDYsXG4gICAgICAxMzUsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAxNjQsXG4gICAgICAxNTQsXG4gICAgICAyMDYsXG4gICAgICAyMzcsXG4gICAgICAxNzIsXG4gICAgICAxNzcsXG4gICAgICAxMTUsXG4gICAgICAxMTEsXG4gICAgICA2NSxcbiAgICAgIDIxMCxcbiAgICAgIDE2NixcbiAgICAgIDExMyxcbiAgICAgIDE1OSxcbiAgICAgIDg2LFxuICAgICAgMTM1LFxuICAgICAgMjA3LFxuICAgICAgMTU4LFxuICAgICAgMTYzLFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg3QkJRTVdTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY1MTAyMzYxOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRW1teUdvbGRcIixcbiAgICBcImxpZFwiOiBcIjI1NTE2NDU3NzUzNDAxMjozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR0M5SmtCRUpmajZia0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJ6bzFWU0pzQnl4QzVHOElyT3BWdkNjWStBVmpndEtmQjY2eS9WM3A4REE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidWpxRGpSRTA5Qkhla0VJb2pvbExSRTQydmRYT0Nrb0cwamtlcXp2cHZvRERDbDBTaTVyNVBxS0lkc2cwMVd6ME1IN0JtalpScTgvY0VpT1Avc0djQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDRyMGJPSEVUQWVRRnBtQkM4VG9PQloyWG1GcUI5cTF4Vm5ibWE4eXIyN1FqZkEzK2JxajJ5NEpkMS9sTU4rYWZiOEJjdTJWNGkydmUwYmdxTHhpQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NTEwMjM2MTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE4ODM0MTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9
  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "EmmyGold",
  ownername:process.env.OWNER_NAME|| "EmmyGold",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
