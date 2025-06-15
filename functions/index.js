const functions = require('firebase-functions');
const admin = require('firebase-admin');
const language = require('@google-cloud/language');
admin.initializeApp();

const client = new language.LanguageServiceClient();

exports.analyzeSentiment = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const messageText = data.text;

    const document = {
      content: messageText,
      type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({ document });
    const sentiment = result.documentSentiment;

    return snap.ref.update({
      sentimentScore: sentiment.score,
      sentimentMagnitude: sentiment.magnitude,
    });
  });