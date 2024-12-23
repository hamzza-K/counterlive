import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const config = {
  runtime: "edge",
};

export default async function handler() {
  const value = await redis.get<number>("counter");
  return new Response(JSON.stringify({ value: value || 0 }), {
    headers: { "Content-Type": "application/json" },
  });
}
