import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const { event } = await req.json();

    if (!event) {
      return NextResponse.json(
        { error: "Evento no proporcionado" },
        { status: 400 },
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "IP desconocida";

    const userAgent = req.headers.get("user-agent") || "Desconocido";

    const message = `
NEW LOG 🚀
Ip: ${ip}
Dispositivo: ${userAgent}
Evento: ${event}
Fecha: ${new Date().toLocaleString()}
    `;

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error enviando log" }, { status: 500 });
  }
}
