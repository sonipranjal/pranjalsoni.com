let DOMAIN = 'pranjalsoni.com';
import mailgun from 'mailgun-js';
const sendmail = mailgun({ apiKey: process.env.MAILGUN_API, domain: DOMAIN });

export default function handler(req, res) {
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
