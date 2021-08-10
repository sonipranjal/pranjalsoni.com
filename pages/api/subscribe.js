import axios from 'axios';

axios.defaults.baseURL = 'https://www.getrevue.co/api/v2/subscribers';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.NEWSLETTER_API_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
  origin: 'pranjalsoni.com',
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run cors
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  try {
    const { email, first_name, last_name } = req.body;

    const response = await axios({
      method: 'post',
      data: { email, first_name, last_name },
    });

    const status = await response.status;

    if (status === 200) {
      return res.status(200).json('success');
    }
    return res.status(400).json({ error: response });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
}
