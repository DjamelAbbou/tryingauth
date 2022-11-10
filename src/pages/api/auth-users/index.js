import dbPromise from "@/modules/db";

export default async function handler(req, res) {
  const { username, password } = req;
  console.log(req.body);

  if (req.method === "POST") {
    const user = await (await dbPromise)
      .db()
      .collection("user")
      .insertOne({ username, password });

    console.log(user);

    res.status(200).json(user);
  }
}
