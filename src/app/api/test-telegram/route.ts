import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.TG_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Credenciales no configuradas" },
      { status: 500 },
    );
  }

  const message = "🚀 Conexión exitosa desde tu backend";

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    },
  );

  const data = await response.json();

  return NextResponse.json({ telegramResponse: data });
}
