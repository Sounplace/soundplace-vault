export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  if (!shop) {
    return new Response("Missing shop parameter", { status: 400 });
  }

  return Response.redirect(`/auth/login?shop=${encodeURIComponent(shop)}`, 302);
}