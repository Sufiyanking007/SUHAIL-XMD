const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Lahore";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923444335107";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_04_50_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmcGNTK2t2QmlyQ080ZWNsSFY3NTBBWUUwajAwNXpGYW84alUrbXZYcTIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5d2Qyc051bVFmdXJaSGZLbG1MZWlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllMjBkYzYzLTMzNmQtNDEwZC04MzBiLTcxZjE3YTU5NmY4ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyNDMsXG4gICAgICAyNDcsXG4gICAgICAxOTIsXG4gICAgICAyMjgsXG4gICAgICAxMDAsXG4gICAgICA0LFxuICAgICAgMzIsXG4gICAgICAxMzMsXG4gICAgICAxMTgsXG4gICAgICAyNTQsXG4gICAgICA0LFxuICAgICAgMzMsXG4gICAgICA2NCxcbiAgICAgIDE5OCxcbiAgICAgIDc0LFxuICAgICAgNCxcbiAgICAgIDEyNCxcbiAgICAgIDI0MSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTA2LFxuICAgICAgMTg4LFxuICAgICAgMTYxLFxuICAgICAgMTEsXG4gICAgICAyNDgsXG4gICAgICAyMjQsXG4gICAgICAxMTgsXG4gICAgICAxNDgsXG4gICAgICAxNzEsXG4gICAgICAxODcsXG4gICAgICAyNDQsXG4gICAgICA2NSxcbiAgICAgIDM4LFxuICAgICAgMjIxLFxuICAgICAgMTUyLFxuICAgICAgMTgwLFxuICAgICAgMjI3LFxuICAgICAgODQsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUkJORFZFQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDQ0MzM1MTA3OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTA0MTQxMzkwMjM2ODo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQK3d1OTBGRUliUTA3Y0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktnWFUxa3pNcDRoMnJMR0VIc2NHemdJSEtqR1lrckFoUGtKZkJvT1M2QWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ0NWSEJmOXZJK2UybTd6L1RucUxzTUI1MDl3VHpEVFdFbStNLytaQjZYVFVlOURKbWd2bmlxUC9LdzZlOHJKSlovLzZ4U1pVYnAzcThpVjF6L0QvRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0lvTmIzVi9icDhzVTQ4Q091ZnE4U1ZJejU3djFicndBZXErR09OZi9aNXAzdUc3VGh0VldsanFnSFZhYjRsYmdXL0RHWVFJNXVjT0V6cnY3UjY1RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDQ0MzM1MTA3OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MzI2MjE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTBaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJMFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1OHhMcmswdmFYYjBRdkVMd3lrc0lLL2FiMVpjRFlFQTNqN1VNZnFtZS80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzgxODUzNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzI1OTE3NTA5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
