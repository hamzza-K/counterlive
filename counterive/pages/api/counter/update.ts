import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Only POST method is allowed", { status: 405 });
  }

  const { operation } = await req.json();
  let value = (await redis.get<number>("counter")) || 0;

  if (operation === "increment") {
    value++;
  } else if (operation === "decrement") {
    value--;
  }

  await redis.set("counter", value);
  return new Response(JSON.stringify({ value }), {
    headers: { "Content-Type": "application/json" },
  });
}
