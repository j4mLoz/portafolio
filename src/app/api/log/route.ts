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
    const body = await req.json();
    const { section, action, label } = body;

    if (!section || !action || !label) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const event = `${section}:${action}:${label}`;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "IP desconocida";

    const userAgent = req.headers.get("user-agent") || "Desconocido";

    const message = `
#############################

[+] <strong>Event:</strong> ${event}

━━━━━━<strong>Client</strong>━━━━━━
[+] <strong>IP: </strong> ${ip}
[+] <strong>Device:</strong>  ${detectDevice(userAgent)}
[+] <strong>Fecha/Hora:</strong>  ${new Date().toLocaleString()}
[+] <strong>User/Agent:</strong>  ${userAgent}
#############################
`;

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error enviando log" }, { status: 500 });
  }
}
