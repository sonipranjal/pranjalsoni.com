let DOMAIN = 'pranjalsoni.com';
import mailgun from 'mailgun-js';
const sendmail = mailgun({ apiKey: process.env.MAILGUN_API, domain: DOMAIN });

import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST', 'OPTIONS'],
    preflightContinue: true,
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  const { email, name, message } = req.body;
  const data = {
    from: email,
    to: process.env.mymail,
    subject: `message from ${name}`,
    text: message,
  };
  sendmail.messages().send(data);
  return res.status(200).json({ message: 'message sent' });
}
