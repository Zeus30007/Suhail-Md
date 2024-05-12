const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="special grade"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "In Lord Mythic i Trust" 


global.devs = "27618049601" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27618049601";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_39_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICAyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQxZGZqSytCN2tMbnhyaXZQNXE2M0Z6QWtqWWhneUdHaTFIQWlFNlJwVlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYwNzY3NjExNzEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzUxMDU4QzkyQjlCMzlCOEZBODdBNjE3ODlBMTA2QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU0NjM1NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjA3Njc2MTE3MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNERjZENjkzQzhGN0MzNkNFNzI1RTM3QkFCODg2OTcyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTQ2MzU2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MDc2NzYxMTcxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzk5M0Y1QzJFMzlGOEQ3OTU4RDdFQkQ1RkRDNERBMzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDYzNTY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYwNzY3NjExNzEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OUJGODI0MTUzRkZGNkE0QUI2RUY5RDUxN0M0MEIxNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU0NjM1NzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVJaNzhGMkNSLWlES1RLTVJDaXhvUVwiLFxuICBcInBob25lSWRcIjogXCI3MjI3NmM3Yy05YzYzLTRlYzgtYjJhMi1hNDFmNTQ1YzgzMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTEzLFxuICAgICAgODEsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICAxMSxcbiAgICAgIDE3MCxcbiAgICAgIDE1MSxcbiAgICAgIDIxNyxcbiAgICAgIDE3MSxcbiAgICAgIDg5LFxuICAgICAgMjEzLFxuICAgICAgMzgsXG4gICAgICAxMjgsXG4gICAgICAxOTMsXG4gICAgICAyOSxcbiAgICAgIDI0MixcbiAgICAgIDc0LFxuICAgICAgMTAxLFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDE2MSxcbiAgICAgIDgyLFxuICAgICAgMTU0LFxuICAgICAgMTc1LFxuICAgICAgMTIxLFxuICAgICAgMTE5LFxuICAgICAgMTAsXG4gICAgICAyMDEsXG4gICAgICAxMzAsXG4gICAgICAxNixcbiAgICAgIDE3MyxcbiAgICAgIDE5MixcbiAgICAgIDU3LFxuICAgICAgMjUsXG4gICAgICAyNDMsXG4gICAgICAxNDQsXG4gICAgICA4NSxcbiAgICAgIDI3LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTIyWVc1VlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDc2NzYxMTcxMDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3ODgzMDM2NjYzODE2NToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcItGq0YfRgtC90ZdjJ3MgU2hhZG93XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjcveWYwRkVJbkwvN0VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyMyt1dHQva0F6Rjc5UFlsRmF0SjF2NlgycGVXSnhXK1piUm8yTGt1cHlrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm8wUk5vU1lFbVlabGJGaXJQNUpMamtZd2ZDUXVmUE96ZDQxY1pJcmttV00zWTNzMGRSNllZaUh1V2x1QzhTa2w3RTZHdkNCT3FJRGRURys1VG1DN0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllqYjlqYTZybkcrNUUzV2tLSjFNdG9DNTlIekE0ZGRLRTBCVHhrTVE3Nk1vQnpnUmpGSEpNblorRWh3cFUyUDRRRGdmbndoWFdCUHMyYmFHUlFNQkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MDc2NzYxMTcxMDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU0NjM1NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBalZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFqVi5qc29uIjogIntcImtleURhdGFcIjpcInpnS0tvL1Q2cHUyem9qMytVQUlJUVZZTk1BTHJ3K2M4UGFsRndzbS9kUnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwNTUzMzY2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1NDIyMjU3MDkwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "in lord mythic i trust" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "in Ѫчтнїc",
  packname: process.env.PACK_NAME || "i trust",
  botname : process.env.BOT_NAME  || "Ѫчтнїc's shadow",
  ownername:process.env.OWNER_NAME|| "Ѫчтнїc",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
