import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, date, time, guests, message } = data;

  if (!name || !date || !time || !guests) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const text = [
    `🍽 Réservation MÉDLËY`,
    ``,
    `Nom : ${name}`,
    `Date : ${date}`,
    `Heure : ${time}`,
    `Couverts : ${guests}`,
    message ? `Message : ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = `https://wa.me/33764016597?text=${encodeURIComponent(text)}`;

  return NextResponse.json({ url: whatsappUrl });
}
