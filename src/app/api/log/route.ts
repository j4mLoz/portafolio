import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

function detectDevice(ua: string) {
  if (/iphone/i.test(ua)) return "iPhone";
  if (/android/i.test(ua)) return "Android";
  if (/ipad/i.test(ua)) return "iPad";
  if (/windows/i.test(ua)) return "Desktop Windows";
  if (/mac/i.test(ua)) return "Desktop Mac";
  return "Desconocido";
}

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
🆕 <b>NEW LOG - Portfolio Event</b>

👤 <b>User Agent</b>
${userAgent}

──────────────

📱 <b>Dispositivo</b>
${detectDevice(userAgent)}

🌍 <b>IP</b>
${ip}

🎯 <b>Evento</b>
${event}

🕒 <b>Fecha</b>
${new Date().toLocaleString()}

──────────────
🌐 juanlozano.dev
`;

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error enviando log" }, { status: 500 });
  }
}
