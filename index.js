'use strict';
var Alexa = require('alexa-sdk');
//OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var APP_ID = "amzn1.ask.skill.2262ea28-3c82-4259-b13f-1a02699133e0";
var SKILL_NAME = 'Holiday';

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var messages = {
  greeting : "Welcome to the Blue Jean app, powered by the keyword Denim. I know all about the best jeans. For example, you can ask denim which jeans should I wear today",
  obvious : "That's obvious, you should wear Blue Jeans.",
  best : "The best jeans are Blue Jeans.",
  help : "I can help you determine the best jean color. For example, just you can ask denim which jeans are best",
  more : "Want to know what jean color to wear, just ask, ask denim what jeans should i wear"
};

var handlers = {
  'LaunchRequest': function () {
    this.emit('Greeting');
  },
  'WearJeans': function () {
    var speechOutput = messages.obvious;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, messages.obvious)
  },
  'BestJeans': function () {
    var speechOutput = messages.best;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, messages.best)
  },
  'Greeting': function () {
    var speechOutput = messages.greeting;
    this.emit(':tellWithCard', speechOutput, SKILL_NAME, messages.greeting)
  },
  'AMAZON.HelpIntent': function () {
    var speechOutput = messages.help;
    var reprompt = messages.more;
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', 'Goodbye!');
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', 'Goodbye!');
  }
};