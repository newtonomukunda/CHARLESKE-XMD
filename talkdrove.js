
{
    "bot-name": "NEWTON AI",
    "description": "Simplicity defines NEWTON AI ",
    "logo": "https://i.imgur.com/5zda1uw.jpeg",
    "keywords": ["bot"],
    "documentation-link": "https://session.talkdrove.com",
    "owner-verification":"hamaxdelalozi@gmail.com",
  
    "env": {
      "SESSION_ID": {
        "description": "Put your SESSION_ID here. Make sure it starts with Byte;;;, or get session id from here, https://session.talkdrove.com",
        "value":"",
        "required": true
        
      },
      "PREFIX": {
        "description": "Bot command prefix, (e.g, . , ! @ etc",
        "value":"!",
        "required": true
        
      },
      "AUTO_READ_STATUS": {
        "description": "Bot will all status, To Enable put true and to disable put false (e.g, true)",
        "value":"true",
        "required": false
        
      },
      "MODE": {
        "description": "Bot mode can be public, private, inbox or groups in small letters (e.g, public)",
        "value":"public",
        "required": true
        
      },
      "OWNER_NUMBER": {
        "description": "OWNER_NUMBER with country code (e.g, 254759626063)",
        "value":"254793753327",
        "required": true
        
      },
      "READ_CMD": {
        "description": "Bot will read of msgs if it is enabled, To Enable put true and to disable put false (e.g, true)",
        "value":"false",
        "required": false
        
      },
  
      "AUTO_REPLY": {
        "description": "Bot will reply to the msgs like gm, gn, love you, hate you, hi, etc... To Enable put true and to disable put false (e.g, true)",
        "value":"false",
        "required": false
        
      },
      "AUTO_REACT": {
        "description": "Bot will react to the msgs, To Enable put true and to disable put false (e.g, true)",
        "value":"false",
        "required": false
        
      },
      "WELCOME": {
        "description": "Bot will welcome the new members in GC (Group chat), To Enable put true and to disable put false (e.g, true",
        "value":"false",
        "required": false
        
      },
      "ANTI_BAD": {
        "description": "Bot delete the message from group if any bad word detected, To Enable put true and to disable put false (e.g, true)",
        "value":"false",
        "required": false
        
      },
      "ANTI_BOT": {
        "description": "Bot delete or kick bots from group, To Enable put true and to disable put false (e.g, true)",
        "value":"false",
        "required": false
        
      },
      "ANTI_LINK": {
        "description": "Bot delete or kick links sender from group, To Enable put true and to disable put false (e.g, true)",
        "value":"false",
        "required": false
        
      },
      "ALWAYS_ONLINE": {
        "description": "Keep your WhatsApp always online put true to activate (e.g, true)",
        "value":"true",
        "required": false
        
      },
      "PRESENCE": {
        "description": "Set presence of your WhatsApp, you can put online to keep your WhatsApp online for always, put offline to keep the WhatsApp normal, put typing to show that you are typing whenever anybody will message you! put recordig to show that you are recording whenever anybody will message you, or you can also show paused for nothing (e.g, online)",
        "value":"2",
        "required": false
        
      },
      "COUNTRY_BLOCK": {
        "description": "Block by country code true to Enable, false to disable (e.g, true)",
        "value":"true",
        "required": false
        
      },
      "COUNTRY_BLOCK_CODE": {
        "description": "Block by country code put country code without + (e.g, 972)",
        "value":"254",
        "required": false
        
      },
      "PREMIUM_USERS": {
        "description": "There are some commands which can only be used by the premium users, put premium users number without +, multiple numbers can be seperated by comma (,) (e.g, 254759626063, or 923072380xx,9234538003xx)",
        "value":"254",
        "required": false
        
      }
    }
  
  }
