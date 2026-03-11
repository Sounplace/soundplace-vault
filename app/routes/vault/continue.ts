import db from "../../db.server";

export async function loader({ request }: any) {

  const url = new URL(request.url);

  const shop = url.searchParams.get("shop");
  const customerId = url.searchParams.get("customerId");

  if (!shop || !customerId) {
    return new Response(JSON.stringify({}), {
      headers: { "Content-Type": "application/json" }
    });
  }

  const progress = await db.videoProgress.findFirst({
    where: {
      shop: shop,
      customerId: customerId.toString()
    },
    orderBy: {
      timestamp: "desc"
    }
  });

  return new Response(JSON.stringify(progress || {}), {
    headers: {
      "Content-Type": "application/json"
    }
  });

}