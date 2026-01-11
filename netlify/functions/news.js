export async function handler(event) {
  try {
    const params = event.queryStringParameters || {};
    const {
      category = "general",
      page = "1",
      pageSize = "19",
      country = "us",
    } = params;

    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key missing on server" }),
      };
    }

    const url =
      `https://newsapi.org/v2/top-headlines?` +
      `country=${country}&category=${category}` +
      `&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("FUNCTION ERROR:", err);

    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Function failed", details: err.message }),
    };
  }
}
