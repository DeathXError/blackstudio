export async function GET(request) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return Response.json(
      { error: "Missing required url parameter.", thumbnailUrl: null },
      { status: 400 }
    );
  }

  const accessToken = process.env.INSTAGRAM_OEMBED_ACCESS_TOKEN;

  if (!accessToken) {
    return Response.json(
      {
        thumbnailUrl: null,
        title: null,
        authorName: null,
        error: "Missing INSTAGRAM_OEMBED_ACCESS_TOKEN.",
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  const endpoint = new URL("https://graph.facebook.com/v22.0/instagram_oembed");
  endpoint.searchParams.set("url", url);
  endpoint.searchParams.set("omitscript", "true");
  endpoint.searchParams.set("access_token", accessToken);

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 86400 },
    });
    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          thumbnailUrl: null,
          title: null,
          authorName: null,
          error: data?.error?.message ?? "Instagram oEmbed request failed.",
        },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    return Response.json(
      {
        thumbnailUrl: data.thumbnail_url ?? null,
        title: data.title ?? null,
        authorName: data.author_name ?? null,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=86400, stale-while-revalidate=604800",
        },
      }
    );
  } catch (error) {
    return Response.json(
      {
        thumbnailUrl: null,
        title: null,
        authorName: null,
        error: "Unable to reach Instagram oEmbed.",
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
