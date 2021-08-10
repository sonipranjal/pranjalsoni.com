// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
export default function handler(req, res) {
  const fetchPosts = async () => {
    const res = await axios.get(
      'https://pranjalsoni.herokuapp.com/ghost/api/v4/content/posts/?key=aaf6a34f53e659a3a2abe7048a'
    );
    console.log(res);
  };
  fetchPosts();
  res.status(200).json({ name: 'John Doe' });
}
