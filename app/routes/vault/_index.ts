export async function loader() {
  return new Response(
    JSON.stringify({ message: "Vault proxy working" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}