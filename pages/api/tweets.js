import axios from 'axios';

const Twitter_API =
  'https://api.twitter.com/2/users/1339688073357971457/tweets?exclude=retweets,replies&tweet.fields=created_at&user.fields=profile_image_url&expansions=author_id';

export default async function fetchTweets(req, res) {
  try {
    const { pagination_token } = req.query;

    const url = pagination_token
      ? Twitter_API + `&pagination_token=${pagination_token}`
      : Twitter_API;

    const tweets = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_BEARER_TOKEN}`,
      },
    });
    return res.status(200).json(tweets.data);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'not able to get tweets' });
  }
}
