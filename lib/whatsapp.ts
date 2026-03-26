import { RESTAURANT } from "./constants";

interface ReservationData {
  name: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

export function buildWhatsAppUrl(data: ReservationData): string {
  const text = [
    `🍽 Réservation MÉDLËY`,
    ``,
    `Nom : ${data.name}`,
    `Date : ${data.date}`,
    `Heure : ${data.time}`,
    `Couverts : ${data.guests}`,
    data.message ? `Message : ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `${RESTAURANT.whatsapp}?text=${encodeURIComponent(text)}`;
}
