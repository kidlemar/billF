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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_57_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRkZEY0VEdHpieGtSTS9oZ3ZyeG9JUGU4Nk9NaUluVlJ0ZmNWT3IxZ0JIST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZmpKTUV0R3JTZUdYMHBLcmVTTHZhQVwiLFxuICBcInBob25lSWRcIjogXCIzMTRmNTA5YS04MWI0LTRlM2EtODk0MS1hNThiZGU3M2Y1ZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMTMxLFxuICAgICAgMjIyLFxuICAgICAgNyxcbiAgICAgIDE0MyxcbiAgICAgIDIxMCxcbiAgICAgIDI1NCxcbiAgICAgIDE3LFxuICAgICAgMTM0LFxuICAgICAgMTkzLFxuICAgICAgMTE2LFxuICAgICAgMTA2LFxuICAgICAgNzEsXG4gICAgICAyMzcsXG4gICAgICAxMDksXG4gICAgICAxMTUsXG4gICAgICAxODQsXG4gICAgICAyNDgsXG4gICAgICAxNTIsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTA4LFxuICAgICAgNTcsXG4gICAgICAxODksXG4gICAgICAyMjUsXG4gICAgICAxNjksXG4gICAgICAyNDEsXG4gICAgICA5NyxcbiAgICAgIDMsXG4gICAgICA2NixcbiAgICAgIDQ3LFxuICAgICAgMTgyLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMTUwLFxuICAgICAgMTI5LFxuICAgICAgNzgsXG4gICAgICAyMzAsXG4gICAgICAyMTYsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFY3RUJFUkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxODM1MTgxNTo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAzMDIzNjk5MzM3MjQ5OjU0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhbDQ4Y0ZFSmFHNUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVdTU1Ezd20wZS9lMDBYRlltZ3FZZ2FiZDd4em8ydDczd045T2JlRGtDZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYdEttR0hTMjdUUit2OEdtVTBtSHdwRlB1eGl4RWFQN3MybXlsRmdIdEZNUTdKbHRYMU9IVXN0bmxwTHYzMG1HTlpQTUp4MFVEVnVPQVQxV0tiQ2NDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSaGhUWWlhM1ZRTWs0bTViZ21vOG95YXdwejhVUTZVSi9OYnJ5VXc3cnU3Zm5qMGxVcnptOFMvV0Mrd0lVK2JHVG1NWlIzNUV2ZnlzQ3pnb0JHZEVnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTgzNTE4MTU6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDM4MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEV3RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURXdC5qc29uIjogIntcImtleURhdGFcIjpcIitITVFRUzE1T0F2REVGekQ2MVNlWjFkUFArT2U5MVZTVlVOVjQ5Sjc4ZHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5MjcwMTg3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTMwMzUxNzE5OFwifSIKfQ=="  // PUT your SESSION_ID 


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
