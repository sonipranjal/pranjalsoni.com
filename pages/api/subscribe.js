import axios from 'axios';

axios.defaults.baseURL = 'https://www.getrevue.co/api/v2/subscribers';
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.NEWSLETTER_API_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST', 'OPTIONS'],
    origin: ['pranjalsoni.com'],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

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
