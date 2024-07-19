const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="billkip20@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "" 


global.devs = "254718351815" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718351815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254718351815,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaWXdQZ1hSTzVoT0VqWjd2b2RxN2lveThBb3dXU1JSTWVxL2tZajEzUmdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc2MjY4NDg3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTIxMUQ2RkIyNEQxODQ4NTdEQ0I2OUU3Nzg4RjZGMzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzg2NzUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzYyNjg0ODc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NjMxMUYxMTE2ODlGNzBEQzQxNEI0Q0U2NDFBOTE0Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzODY3NTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMndNNTNFUUdUTXlSMVBsaXB5MW03UVwiLFxuICBcInBob25lSWRcIjogXCI3NjhlZDg4OS1lZTVkLTRlNWEtYmQ1NS1iMzU1Y2JlNjg5MDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxODAsXG4gICAgICAyMzAsXG4gICAgICAxOTcsXG4gICAgICAyMDMsXG4gICAgICA1MSxcbiAgICAgIDE3NixcbiAgICAgIDE4OSxcbiAgICAgIDIzMCxcbiAgICAgIDIwOSxcbiAgICAgIDE1NixcbiAgICAgIDM2LFxuICAgICAgODMsXG4gICAgICA2OCxcbiAgICAgIDM2LFxuICAgICAgNTQsXG4gICAgICAyNDgsXG4gICAgICAxNDksXG4gICAgICAxNDQsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDY2LFxuICAgICAgMTk3LFxuICAgICAgOTUsXG4gICAgICA0MixcbiAgICAgIDE5NyxcbiAgICAgIDEwMSxcbiAgICAgIDY0LFxuICAgICAgODIsXG4gICAgICAxNjUsXG4gICAgICAxNTYsXG4gICAgICAyNixcbiAgICAgIDIwNSxcbiAgICAgIDE3MyxcbiAgICAgIDU4LFxuICAgICAgMjcsXG4gICAgICAxODgsXG4gICAgICAxNDcsXG4gICAgICAxMyxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxQ0NERjNFTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzYyNjg0ODc4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc5MDYyMDkzNTI5MjEwOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGVtYXJLaWTwn464XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkNnaXM0RkVQYU42YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIOTh5MTNQaEVwWDREVXdZb0RtSDVvSnB0bE1MY001aW05T1A3b1E0ZVFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5vZllUOXhSMnZpSnFtTlkxRlZXWnpmNGFsMDdtQnlqWE5qeUdpd3JGeXFxM2IvbTBkSjBBV3dmYUxUQ0dmWDh4NldtZGM3d0wvQWg5NUczbHNtTkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZuVmMwQjFJZExtbkl5cjNFZEZlNm11cjZ6a2thQVp5OGFwbHZTZVhZd3dnakVUODFqeDlwVGRUamtpTEVjSVVMeEdNV01DdHdTVGJtbDhyQ3VBeEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc2MjY4NDg3ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODY3NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCTmdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJOZy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "keen",
  packname: process.env.PACK_NAME || "keensly",
  botname : process.env.BOT_NAME  || "keensly",
  ownername:process.env.OWNER_NAME|| "keensly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "KEENSLY"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
