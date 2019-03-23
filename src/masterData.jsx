export const getMasterData = function(){
    const botData = {
  "add_ons": [
    "ip_service"
  ],
  "addon_redis_keys": [
    "szyeRTeD63PK073337520564zqTkF0Jw"
  ],
  "messages": [
    {
      "defaultCallback": "",
      "id": 2,
      "index": 1,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Which Page?",
      "sequence": {
        "default_next_dialog": 2,
        "jump_to": [
          {
            "compare_value": "https://www.marutitech.com/14-powerful-chatbot-platforms/",
            "compare_with": "$user.domainUrl",
            "next_dialog": 28,
            "operator": "equal_to"
          }
        ]
      },
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 3,
      "index": 2,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Hey there! ?Good to see you here. I'm <b>Specter</b> - a chatbot for Maruti Techlabs. <br/>\n<br/>\nPrimarily, what I do is, help businesses across industries engage with their customers better.\n",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 3,
      "options": [
        {
          "answer": "Yes, I want to build a chatbot.",
          "id": "6"
        },
        {
          "answer": "Just here to learn about chatbots.",
          "id": "21"
        },
        {
          "answer": "Nah. Not really.",
          "id": "4"
        }
      ],
      "parameter": "",
      "resolvedQuery": "So that's me. Now that you are here, I'm guessing you must be, at the very least, curious about this whole chatbots thing, right?",
      "response_column_number": 3,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 5,
      "index": 4,
      "options": [],
      "parameter": "",
      "resolvedQuery": "That's strange! Did you know that by 2020, over <b>80% of businesses</b> are expected to have some sort of chatbot automation implemented?",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 5,
      "options": [
        {
          "answer": "Okay, tell me more",
          "id": "21"
        },
        {
          "answer": "Thanks, but I'm good",
          "id": "18"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Or the fact that chatbots could save businesses up to <b>$8 billion per year</b> across industries? Do I have your attention now?",
      "response_column_number": 4,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 7,
      "index": 6,
      "options": [],
      "parameter": "",
      "resolvedQuery": "That's brilliant. You're looking for someone just like me then. ? Right place at the right time, eh?",
      "sequence": {
        "default_next_dialog": 7,
        "jump_to": [
          {
            "compare_value": "FACEBOOK_MESSENGER",
            "compare_with": "$user.reffral_category",
            "next_dialog": 24,
            "operator": "equal_to"
          }
        ]
      },
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 8,
      "index": 7,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Tell me a bit about this bot you're looking for. What do you want it to do?",
      "response_column_number": 5,
      "sequence": "",
      "type": "input"
    },
    {
      "defaultCallback": "",
      "index": 8,
      "options": [
        {
          "answer": "Immediately (this Q)",
          "id": "9"
        },
        {
          "answer": "Short Term (in 1Q)",
          "id": "9"
        },
        {
          "answer": "Long Term (in 2Q)",
          "id": "9"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Got it! And how soon do you want to deploy it?",
      "response_column_number": 6,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 10,
      "index": 9,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Perfect! I'll have my guys reach out to you to discuss further.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 11,
      "index": 10,
      "options": [],
      "parameter": "",
      "resolvedQuery": "They'll walk you through the possibilities. I'll just need a couple details.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 12,
      "index": 11,
      "options": [],
      "parameter": "$user.info.name",
      "resolvedQuery": "First off, what's your name?<br>\n<br>\nBetween all this rambling, I completely forgot introductions.",
      "response_column_number": 7,
      "sequence": 58,
      "type": "input (name)"
    },
    {
      "defaultCallback": "Please enter a valid email address.",
      "id": 13,
      "index": 12,
      "options": [],
      "parameter": "#email_address#",
      "resolvedQuery": "What is your email address?<br> \n<br> \nWe'll be needing this to get in touch with you.",
      "response_column_number": 8,
      "sequence": 56,
      "type": "input (email)"
    },
    {
      "defaultCallback": "",
      "id": 14,
      "index": 13,
      "options": [],
      "parameter": "#contact#",
      "resolvedQuery": "{\"validation\":{\"length\":{\"error_message\":\"Check the number of digits for your number.\",\"rules\":[{\"India\":10}]},\"number\":{\"rules\":[\"^0[0-9]+$\"],\"error_message\":\"Please enter a valid phone number\"},\"formatter\":\"\"},\"title\":\"Great!<br><br>Lastly, I'll be needing your <b>contact number</b>. I promise my people won't spam you.\"}",
      "response_column_number": 9,
      "sequence": 26,
      "type": "custom_phone_input"
    },
    {
      "defaultCallback": "",
      "id": 15,
      "index": 14,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Okay! I'm all set. Thanks for sharing the details. It's been great talking to you ?",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 16,
      "index": 15,
      "options": [],
      "parameter": "",
      "resolvedQuery": "I'll have a human get in touch with you real soon.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 17,
      "index": 16,
      "options": [],
      "parameter": "",
      "resolvedQuery": "But while you are here, you can check out some of these articles around AI and chatbots that we have been writing.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 17,
      "options": [],
      "parameter": "",
      "resolvedQuery": "<a href=\"https://www.marutitech.com/blog/\" target=\"_blank\">Click here.</a>",
      "sequence": "",
      "type": "end"
    },
    {
      "defaultCallback": "",
      "id": 19,
      "index": 18,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Oh well! ? Can't win 'em all. ",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 20,
      "index": 19,
      "options": [],
      "parameter": "",
      "resolvedQuery": "I reckon you need help with our other service offerings then.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 20,
      "options": [],
      "parameter": "",
      "resolvedQuery": "In that case, you can get in touch with my team <a href=\"https://www.marutitech.com/contact-us/\" target=\"_blank\">here</a>. They'll be happy to help ?",
      "sequence": "",
      "type": "end"
    },
    {
      "defaultCallback": "",
      "index": 21,
      "options": [
        {
          "answer": "Honestly, that's kinda cool",
          "id": "22"
        },
        {
          "answer": "What else can you do?",
          "id": "23"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Sure thing! <br/>\n<br/>\nHere's the low down - we're automated pieces of software that talk to wonderful people like you everyday. <br/>\n<br/>\nInfact, on a daily basis, I have hundreds of interactions. Just like the one we are having right now. ",
      "response_column_number": 10,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 23,
      "index": 22,
      "options": [],
      "parameter": "",
      "resolvedQuery": "It is.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 23,
      "options": [
        {
          "answer": "It is",
          "id": "24"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Believe it or not, there's a lot more up my sleeve.<br/>\n<br/>\n&#9642;Lead Generation<br/>\n&#9642;Customer Support<br/>\n&#9642;Answer FAQs<br/>\n&#9642;Scheduling Interviews<br/> \n&#9642;Sell Products and more<br/>\n<br/>\nIt's a very long list. <br/>\n<br/>\nJust recently, I helped one customer in generating close to <b>370+ qualified leads/week</b> for their product. Pretty neat, huh?",
      "response_column_number": 11,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "index": 24,
      "options": [
        {
          "answer": "Yes, please!",
          "id": "9"
        },
        {
          "answer": "I'm good, thanks!",
          "id": "25"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Thanks! ? Now that I've impressed you, can someone from my team get in touch with you? <br/>\n<br/>\nPerhaps you humans can discuss how a bot can help you scale your business? ?",
      "response_column_number": 12,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 26,
      "index": 25,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Hard to please customer huh? ? That's okay. I won't bug you any further. ",
      "sequence": 16,
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 27,
      "index": 26,
      "options": [],
      "parameter": "",
      "resolvedQuery": "ContactInfoParser({\"contact\":\"#contact# | #email_address#\", \"default_next_dialog_id\":14})",
      "sequence": "",
      "type": "codeblock"
    },
    {
      "defaultCallback": "",
      "id": 28,
      "index": 27,
      "options": [],
      "parameter": "",
      "resolvedQuery": "SalesforceWebToLead({\"oid\":\"00D6F000002J6yF\", \"endpoint\":\"https://webto.salesforce.com/servlet/servlet.WebToLead\", \"email\":\"#email#\", \"mobile\":\"#mobile#\", \"00N6F00000KvELD\": \"Maruti Techlabs\", \"00N6F00000KvENO\": \"Specter\", \"first_name\": \"$user.info.name\",\"company\": \"#company#\", \"00N6F00000KvEZK\": \"1\", \"00N6F00000WNqgn\": \"$user.conversationURL\", \"00N6F00000OUsqO\" : \"$user.domainUrl\", \"city\": \"$user.cityName\", \"country\": \"$user.countryName\", \"00N6F00000MnJ08\" : \"$user.ipAddress\"})",
      "sequence": 14,
      "type": "codeblock"
    },
    {
      "defaultCallback": "",
      "id": 29,
      "index": 28,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Hello there! ? I see you are here searching for a chatbot platform or information on building a bot.<br>\n<br>\nAlmost everyone lands on this page for those two reasons.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 30,
      "index": 29,
      "options": [],
      "parameter": "",
      "resolvedQuery": "I like to think of myself as an expert on bots. I'm going to help you pick the right platform for your bot, so like it or not, <b>I'm on this journey with YOU</b>.<br>\n<br>\nLet's do this together - like a <b><i>TEAM!</i></b> ???",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 31,
      "index": 30,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Starting with the basics - what do you want this chatbot to do for you?",
      "response_column_number": 13,
      "sequence": "",
      "type": "input"
    },
    {
      "defaultCallback": "",
      "index": 31,
      "options": [
        {
          "answer": "Website",
          "id": "32"
        },
        {
          "answer": "Facebook",
          "id": "50"
        },
        {
          "answer": "Other Channels",
          "id": "51"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Got it, and where do you want it to be hosted?<br>\n<br>\nIdeally, it is best to have it where you get the most traffic or where your target audience resides.",
      "response_column_number": 14,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 33,
      "index": 32,
      "options": [],
      "parameter": "",
      "resolvedQuery": "YES!<br>\n<br>Best to have a bot on your website that helps engage visitors & educates them about what you do, because let's be honest - <b>no one</b> likes reading walls of text.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 33,
      "options": [
        {
          "answer": "Database",
          "id": "35"
        },
        {
          "answer": "CRM",
          "id": "35"
        },
        {
          "answer": "Other Third Party Systems",
          "id": "34"
        }
      ],
      "parameter": "",
      "resolvedQuery": "So, I'm guessing you'll need this bot to be integrated with your internal system(s) as well? Which one is it?",
      "response_column_number": 15,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 35,
      "index": 34,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Definitely! We've seen integrations from internal to external systems ranging from Management Information Systems, Booking Engines, Payment Gateways and much more.<br>\n<br>\nLet me know what kind of integrations you are looking for in some detail.",
      "response_column_number": 16,
      "sequence": "",
      "type": "input"
    },
    {
      "defaultCallback": "",
      "index": 35,
      "options": [
        {
          "answer": "Sequential suits my use case",
          "id": "36"
        },
        {
          "answer": "I need AI/ML",
          "id": "36"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Perfect! Thanks for sharing ?<br>\n<br>\nAnother thing that is really important is the chatbot flow.<br>\n<br>\nDo you want this to be sequential in nature <b><i>(like me)</i></b>? Or you're looking to build a bot with AI/ML capabilities?",
      "response_column_number": 17,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "index": 36,
      "options": [
        {
          "answer": "I can take care of it",
          "id": "37"
        },
        {
          "answer": "I'll need some assistance",
          "id": "38"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Perfect! So when it comes to the chatbot's conversation, do you have a bot script in place or you need some assistance from conversation designers?",
      "response_column_number": 18,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "index": 37,
      "options": [
        {
          "answer": "Yes, please",
          "id": "39"
        },
        {
          "answer": "Not really",
          "id": "39"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Great! Lastly, would be you interested in having the ability to take over from the chatbot time to time? Think of like having a <b>chatbot that can turn into a live chat when you want</b>.<br>\n<br>\nAlso, how about chatbot analytics? Getting the right insights that allow you to A/B test is KEY! ???",
      "response_column_number": 19,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 39,
      "index": 38,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Oh yeah! There's always conversation designers who can help you map out your value proposition and the funnel into the bot's backend in a conversational manner.<br>\n<br>\nYou don't need to worry about the headache of preparing chatbot scripts.",
      "sequence": 37,
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 40,
      "index": 39,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Thanks for sharing all these answers! Based on your needs, I have shortlisted these <b>3</b> platforms that best suit your needs.<br>\n<br>\nPS. - I'm a little baised towards <b>WotNot</b> (<i>for obvious reasons</i>.) ",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 41,
      "index": 40,
      "options": [],
      "parameter": "",
      "resolvedQuery": "[{\"image\":\"https://wotnot.nyc3.digitaloceanspaces.com/images/Maruti/WotNot/Images/wotnot_logo.png\",\"title\":\"WotNot\",\"subtitle\":\"&#x25CF; Multi Channel & Custom Integration Support<br>&#x25CF; Human Handover<br>&#x25CF; Chatbot Analytics<br>&#x25CF; Multi-Language Support<br>&#x25CF; Amazon Alexa & Google Home Integrations<br>&#x25CF; No Coding Required<br>&#x25CF; Build your Bot using a Google Sheet<br>\",\"options\":[{\"text\":\"Learn More\",\"next_dialog\":\"41\"}]},{\"image\":\"https://i.imgur.com/wjlgQrH.png\",\"title\":\"Botsify\",\"subtitle\":\"&#x25CF; Multi Channel<br>&#x25CF; Human Handover<br>&#x25CF; Integration with Shopify & Zapier<br>&#x25CF; No Coding Required<br>\",\"options\":[{\"text\":\"Learn More\",\"next_dialog\":\"53\"}]},{\"image\":\"https://i.imgur.com/B8lZFVh.png\",\"title\":\"Recast.AI\",\"subtitle\":\"&#x25CF; Multi Channel<br>&#x25CF; Bot Builder<br>&#x25CF; Chatbot Analytics<br>&#x25CF; No Coding Required<br>&#x25CF; Custom Integration<br>\",\"options\":[{\"text\":\"Learn More\",\"next_dialog\":\"53\"}]}]",
      "response_column_number": 20,
      "sequence": "",
      "type": "cardview"
    },
    {
      "defaultCallback": "",
      "id": 42,
      "index": 41,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Here. Check out this <b>video</b> to learn more.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 43,
      "index": 42,
      "options": [],
      "parameter": "",
      "resolvedQuery": "<div style=\"margin-left: -20px; margin-bottom: -20px; margin-top: -15px; margin-right: -20px;\"><iframe width=\"100%\" height=\"100%\" src=\"https://www&#x2e;youtube&#x2e;com/embed/BwwsSlcYZKk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>",
      "sequence": 53,
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 44,
      "index": 43,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Perfect! Let's book it rightaway.<br>\n<br>\nThe team will walk you through the different use cases they have worked on using different platforms.\n",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 45,
      "index": 44,
      "options": [],
      "parameter": "$user.info.name",
      "resolvedQuery": "I'll just need a couple details.<br>\n<br>\nLet's start with your name?<br>\n<br>\nBetween all this rambling, I completely forgot introductions.",
      "response_column_number": 21,
      "sequence": 60,
      "type": "input (name)"
    },
    {
      "defaultCallback": "Please enter a valid email address.",
      "id": 46,
      "index": 45,
      "options": [],
      "parameter": "#email_address#",
      "resolvedQuery": "Could you please share your email? We'll need this to get in touch with you.",
      "response_column_number": 22,
      "sequence": 57,
      "type": "input (email)"
    },
    {
      "defaultCallback": "",
      "id": 47,
      "index": 46,
      "options": [],
      "parameter": "#contact#",
      "resolvedQuery": "{\"validation\":{\"length\":{\"error_message\":\"Check the number of digits for your number.\",\"rules\":[{\"India\":10}]},\"number\":{\"rules\":[\"^0[0-9]+$\"],\"error_message\":\"Please enter a valid phone number\"},\"formatter\":\"\"},\"title\":\"Great!<br><br>Lastly, I'll be needing your <b>contact number</b>. I promise my people won't spam you.\"}",
      "response_column_number": 23,
      "sequence": 54,
      "type": "custom_phone_input"
    },
    {
      "defaultCallback": "",
      "id": 48,
      "index": 47,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Okay! I'm all set. Thanks for sharing the details. It's been great talking to you ?<br>\n<br>\nI'll have a human get in touch with you real soon.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 49,
      "index": 48,
      "options": [],
      "parameter": "",
      "resolvedQuery": "But while you are here, you can check out some of these articles around AI and chatbots that we have been writing.",
      "sequence": "",
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 49,
      "options": [],
      "parameter": "",
      "resolvedQuery": "<a href=\"https://www.marutitech.com/blog/\" target=\"_blank\">Click here.</a>",
      "sequence": "",
      "type": "end"
    },
    {
      "defaultCallback": "",
      "id": 51,
      "index": 50,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Ah yes! Social is huge - having a Messenger bot or a bot on social channels to engage, nurture and drive your audience through the funnel is super important. ",
      "sequence": 33,
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 52,
      "index": 51,
      "options": [],
      "parameter": "",
      "resolvedQuery": "Sure! Having a chatbot that can be integrated across a range of platforms, especially where your target audience resides in, is paramount.<br>\n<br>\nType in the channel(s) of your choice here.",
      "response_column_number": 24,
      "sequence": 33,
      "type": "input"
    },
    {
      "defaultCallback": "",
      "id": 53,
      "index": 52,
      "options": [],
      "parameter": "",
      "resolvedQuery": "No worries! I understand that this may not be the right time, but you can always hit me up for quick demo with the team - anytime you like.<br>\n<br>\nTill then, cheerio & happy holidays!<br>\n<br>\nWhile you are here - how about reading up on the latest trends in the AI/ML/Bot Development space?",
      "sequence": 49,
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "index": 53,
      "options": [
        {
          "answer": "Yes",
          "id": "43"
        },
        {
          "answer": "No",
          "id": "52"
        }
      ],
      "parameter": "",
      "resolvedQuery": "Would you like to book a <b>FREE</b> 30 min consulting call with the team?<br>\n<br>\nThis way, you can learn more the bot building process and platforms.",
      "response_column_number": 25,
      "sequence": "",
      "type": "options"
    },
    {
      "defaultCallback": "",
      "id": 55,
      "index": 54,
      "options": [],
      "parameter": "",
      "resolvedQuery": "ContactInfoParser({\"contact\":\"#contact# | #email_address#\", \"default_next_dialog_id\":47})",
      "sequence": "",
      "type": "codeblock"
    },
    {
      "defaultCallback": "",
      "id": 56,
      "index": 55,
      "options": [],
      "parameter": "",
      "resolvedQuery": "SalesforceWebToLead({\"oid\":\"00D6F000002J6yF\", \"endpoint\":\"https://webto.salesforce.com/servlet/servlet.WebToLead\", \"email\":\"#email#\", \"mobile\":\"#mobile#\", \"00N6F00000KvELD\": \"Maruti Techlabs\", \"00N6F00000KvENO\": \"Specter\", \"first_name\": \"$user.info.name\",\"company\": \"#company#\", \"00N6F00000KvEZK\": \"1\", \"00N6F00000WNqgn\": \"$user.conversationURL\", \"00N6F00000OUsqO\" : \"$user.domainUrl\", \"city\": \"$user.cityName\", \"country\": \"$user.countryName\", \"00N6F00000MnJ08\" : \"$user.ipAddress\"})",
      "sequence": 47,
      "type": "codeblock"
    },
    {
      "defaultCallback": "",
      "id": 57,
      "index": 56,
      "options": [],
      "parameter": "#company#",
      "resolvedQuery": "What company do you work for?",
      "response_column_number": 26,
      "sequence": 13,
      "type": "input"
    },
    {
      "defaultCallback": "",
      "id": 58,
      "index": 57,
      "options": [],
      "parameter": "#company#",
      "resolvedQuery": "What company do you work for?",
      "response_column_number": 27,
      "sequence": 46,
      "type": "input"
    },
    {
      "defaultCallback": "",
      "id": 59,
      "index": 58,
      "options": [],
      "parameter": "",
      "resolvedQuery": "",
      "sequence": {
        "default_next_dialog": 59,
        "jump_to": [
          {
            "compare_value": "",
            "compare_with": "$user.info.name",
            "next_dialog": 12,
            "operator": "equal_to"
          }
        ]
      },
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 60,
      "index": 59,
      "options": [],
      "parameter": "",
      "resolvedQuery": "That's a lovely name, $user.info.name!",
      "sequence": 12,
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 61,
      "index": 60,
      "options": [],
      "parameter": "",
      "resolvedQuery": "",
      "sequence": {
        "default_next_dialog": 61,
        "jump_to": [
          {
            "compare_value": "",
            "compare_with": "$user.info.name",
            "next_dialog": 45,
            "operator": "equal_to"
          }
        ]
      },
      "type": "informative"
    },
    {
      "defaultCallback": "",
      "id": 62,
      "index": 61,
      "options": [],
      "parameter": "",
      "resolvedQuery": "That's a lovely name, $user.info.name!",
      "sequence": 45,
      "type": "informative"
    }
  ],
  "parameters": {
    "#company#": null,
    "#contact#": null,
    "#email_address#": null,
    "$user.countryName": null,
    "$user.info.name": null
  },
  "spreadsheet_tab_name": "Version 83",
  "spreadsheet_tab_name_preview": "Version 83 (preview)"
}
return botData;
}