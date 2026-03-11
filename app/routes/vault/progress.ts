import db from "../../db.server";

export async function loader() {
  return new Response("OK");
}

export async function action({ request }: any) {

  const raw = await request.text();
  const body = JSON.parse(raw);

  const {
    shop,
    customerId,
    videoId,
    timestamp,
    duration,
    seriesHandle
  } = body;

  await db.videoProgress.upsert({
    where: {
      shop_customerId_videoId: {
        shop,
        customerId,
        videoId
      }
    },
    update: {
      timestamp,
      duration
    },
    create: {
      shop,
      customerId,
      videoId,
      timestamp,
      duration,
      seriesHandle
    }
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      "Content-Type": "application/json"
    }
  });

}