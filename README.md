### Welcome to the BLUE JEANS Alexa Skill

[Blue Jeans](https://www.amazon.com/Michael-Geatz-Blue-Jeans/dp/B01MY27KFE/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1484269472&sr=1-1&keywords=blue+jean) is a published skill, available for Amazon's Alexa virtual assistant. It is free to enable, and can be accessed with the **Invocation Name**: "daily denim". This is a simple application repository meant to exemplify the base files, schemas, and utterances needed for creating a new Alexa Skill.

Blue Jeans uses the following:

**Intent Schema**

```
{
  "intents": [
    {
      "intent": "WearJeans"
    },
    {
      "intent": "BestJeans"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
 }
```

**Sample Utterances**

```
WearJeans which jeans should i wear
WearJeans which jeans should i wear today
WearJeans what color jeans should i wear today
WearJeans what color jeans should i wear
WearJeans what jeans should i wear
WearJeans what jeans should i wear today

BestJeans which jeans are best
BestJeans which jeans are the best
BestJeans which jean color goes best
BestJeans which jean color is best
BestJeans what jeans are the best
BestJeans what color jeans are the best
BestJeans what color jeans are best
BestJeans what jean color goes best
BestJeans what jean color is best
```

You can upload the zip file (included in this repository) to a newly created AWS Lambda Function. To ensure Alexa compatability, choose Alexa Skill and US East (N. Virgina) during Lambda configuation.
