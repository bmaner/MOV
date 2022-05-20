import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

async function handler(req, res) {
  const {
    body: { message },
  } = req;

  if (req.method === "GET") {
    const messages = await client.message.findMany({
      skip: 0,
      take: 10,
      orderBy: [{ createdAt: "desc" }],
    });
    res.json({
      ok: true,
      messages,
    });
  } else if (req.method === "POST") {
    const createdMessage = await client.message.create({
      data: {
        message,
      },
    });
    res.json({
      ok: true,
      createdMessage,
    });
  }
}

export default withHandler({
  methods: ["GET", "POST"],
  fn: handler,
  isPrivate: false,
});
