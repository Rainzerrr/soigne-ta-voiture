import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log("calendar id : ", process.env.CALENDAR_ID);
  console.log("calendar email : ", process.env.CALENDAR_EMAIL);
  console.log("calendar private key : ", process.env.CALENDAR_PRIVATE_KEY);
  console.log("base url : ", process.env.BASE_URL);
  try {
    // Obtenir la date et l'heure actuelles
    const now = new Date();
    // Ajouter un mois à la date actuelle
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(now.getMonth() + 1);

    // Authentification via le compte de service Google
    const auth = new JWT({
      email: process.env.CALENDAR_EMAIL,
      key: process.env.CALENDAR_PRIVATE_KEY!.replace(/\\n/g, "\n"),

      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const calendarId = process.env.CALENDAR_ID;

    // Appel à l'API pour récupérer les événements dans la période définie
    const response = await calendar.events.list({
      calendarId,
      timeMin: now.toISOString(), // Date actuelle
      timeMax: oneMonthLater.toISOString(), // 1 mois après la date actuelle
      singleEvents: true,
      orderBy: "startTime", // Trie les événements par heure de début
    });

    const events = response.data.items;

    let filteredEvents = events?.filter((event) => event.summary == null);

    filteredEvents = filteredEvents?.map((event) => ({
      id: event.id,
      startHour: new Date(event.start?.dateTime!),
      endHour: new Date(event.end?.dateTime!),
    }));

    return new Response(
      JSON.stringify({
        events: filteredEvents,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Erreur lors de la récupération des événements:", error);
    return new Response(
      JSON.stringify({
        error: "Erreur lors de la récupération des événements.",
        details: error.message || error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
