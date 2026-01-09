export function GET() {
  return new Response("User-agent: *\nAllow: /\n\nSitemap: https://vlovsol.com/sitemap.xml", {
    headers: {
      "content-type": "text/plain",
    },
  });
}
