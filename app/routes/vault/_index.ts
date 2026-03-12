export async function loader() {
  return new Response(
    `
    <html>
      <body style="font-family: sans-serif; padding:40px">
        <h1>Soundplace Vault Connected</h1>
        <p>The Shopify App Proxy is working.</p>
      </body>
    </html>
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}