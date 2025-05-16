import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { NextRequest } from "next/server";

type Event = {
  eventId: string;
  summary: string;
  location: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  colorId: string;
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const event: Event = body;
    const auth = new JWT({
      email: process.env.CALENDAR_EMAIL,
      key: [process.env.CALENDAR_PRIVATE_KEY].join("\n"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const calendarId = process.env.CALENDAR_ID;

    const response = await calendar.events.update({
      calendarId,
      eventId: event.eventId,
      requestBody: event,
    });

    return new Response(
      JSON.stringify({
        message: "Événement créé avec succès",
        link: response.data.htmlLink,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Erreur lors de la création :", error);
    return new Response(
      JSON.stringify({
        error: "Erreur lors de la création de l'événement",
        details: error.message || error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
