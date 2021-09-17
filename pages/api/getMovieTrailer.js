import axios from "axios";

export default async function handler(req, res) {
  const { movieID } = req.query;

  const { data } = await axios.get(
    `${process.env.MOVIE_DB_SERVICE_URL}/movie/${movieID}/videos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    }
  );

  res.json(data);
}
