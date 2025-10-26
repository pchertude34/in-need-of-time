import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return new Response(JSON.stringify({ error: "Missing city parameter" }), {
      status: 400,
    });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      throw new Error("Missing OPENWEATHER_API_KEY in env");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city,
    )}&appid=${apiKey}&units=metric`;

    const { data } = await axios.get(url);

    return new Response(
      JSON.stringify({
        ok: true,
        city: data.name,
        weather: data.weather[0].description,
        temperature: data.main.temp,
      }),
      { status: 200 },
    );
  } catch (err: any) {
    console.error("Weather API error:", err.message);
    return new Response(JSON.stringify({ error: err.message || "Failed to fetch weather" }), { status: 500 });
  }
}
