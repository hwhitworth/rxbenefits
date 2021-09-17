import axios from "axios";

export default async function handler(req, res) {
  const { searchString } = req.query;

  const { data } = await axios.get(
    `${process.env.MOVIE_DB_SERVICE_URL}/search/movie?query=${searchString}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    }
  );

  res.json(data);
}
