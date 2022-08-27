import nodemailer from 'nodemailer';

export default async function contactHandler(req, res) {
  if (req.method === 'POST') {
    const body = req.body;

    if (!body.message || !body.name || !body.email) {
      res.status(400).json({
        message: 'Please provide all the fields',
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: `Contact Submission | pranjalsoni.com" ${process.env.EMAIL_FROM}`,
        to: process.env.EMAIL_TO,
        subject: `New Contact Submission | pranjalsoni.com`,
        html: `You have a new contact submission with the following details. <br/> Name: ${body.name} <br/> Email: ${body.email} <br/> Message: ${body.message}`,
      });
      res.status(200).json({
        message: 'Message sent',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
      });
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}
