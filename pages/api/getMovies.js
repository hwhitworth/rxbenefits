import axios from "axios";

export default async function handler(req, res) {
  const { movieFilter } = req.query;

  const { data } = await axios.get(
    `${process.env.MOVIE_DB_SERVICE_URL}/movie/${movieFilter}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    }
  );

  res.json(data);
}
