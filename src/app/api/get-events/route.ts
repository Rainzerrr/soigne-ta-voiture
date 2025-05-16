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
      key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+b2ig+DXCy+Lq\nhYBtcO7YbEptyCW0SHC0yzuQ2XZMZN5dkFdZN+liAuLkRYQ+mfd5TT8GO84LJj6S\nV/SvNpE/9vK3GnoHbWHen9dXyrBvgU6wlKnxjvNVS8ty9gYThSYhqb2nS+LaiTch\nwqN/AjlCHJ63ELOjEnp+uZYE9lXk2tkglD8EWKPpsSoYE74u8eUjVBLNPFVp0YhP\neFJsP80r9nLtZ9XKQL1ruPFtjhQdsAMDr+6RGsBFS78Q0e6PlSgCbuqgQGiU7zMm\nJmH2mpULiMfuzZl5XxTU9dZnJd8tAzYkCw2SdDvGuwomLP2sMvgxJ/Dgj3BtMq8n\nJz9Sjp5ZAgMBAAECggEAFYp6Q38Kwb/t/ojfB+zML5yW510fmrQjqj0KPgPDLw1X\n3oMwcONIrxv+ze2+cZWumcDZngW6Hvu9UdtzeOBLb3iqaCOCuyqtypC6ZfADo3v1\nH+HpE+26Fk4OXjDNwNErs4dvmv1pVJP3MbFCbOBJBB1C/MJ9t2FPNtzHnJnACd9f\nIOO/9pKaZGdCzPmec7SKLR7wMHQZ6b/nQ2FQvnc2uDaflZDyL93m1eA2UwKnmjtu\n2ddP0AashfIXKmK+2pGoBBypyAUvDAVZ465zcM1O12kMqE8a26IuDgg0qoQ75RC7\ngZqQEzY0bojB6jvIzeKJbqpO5DJjVR9aHxKmDHqgowKBgQD54YI+HJVEeZncZ/56\nq4PUC/Akpq5mWp3YixVgR/RlJfTHgWk5dBR1kh7jTRZba0zGPpe1KO57BCUgjyEn\nHRy0U4cwQVRt962gJJMm9lIVs74sl535qyEiHzqjLROVBUpx0X6u3Vdife8PrSox\nrnX5VCp7MLcINYzSnkv8G4pYjwKBgQDDGTzaTasQC8Fjs0e4G/Cs2+6MEZUwvacG\n4PRHtIkEwqwb9XbYrChO4SJVVoewbJ4xsUu2r/HeFSPjH/KRZ0aSUncbim3TuQ8R\nHUU9KA0REjAY7lcPo4XugzY2PCz4NwVzdoYSr00sRssHzv3YhVaSH3VFQQTQ0ty+\nVQqsIMJ+lwKBgQCEnxKAIq16dUua9jrTInrKLTfcS/bd7hQ+nLrQqf/lOzrqNB4D\n1z8Qk2f/XaeTB6TsxsW/6aSA99c4q5594u6cKoTisJm976lgCGltUWiJiidSBXpb\ny16/fHGjr0XoXrF/LSAecO1zIcGiwVZWnfCRTwFo9pb+LWW7Vzae7IMFswKBgA2g\n27FcL5DlYVL3mRDxUrSggF9kcwl+lgZS/H1tzQx6FM+3K+Ai1oX8EAvqCXx3ee16\ntxFB5SFgVKtu9eDWWAWsoQlZeCaMDNNjOgz1mUQSAy4aqBY9lAN/QvAy7+k+3rCc\nHO19NWTcZR5chTr0xYFblTOLQSzdLfJVunMfrrZtAoGAG7uRnswpbbcFXlx1f4V1\nDdOoO++z8Qo2CFSIEO2PTPFOSN+N++sa/fiGbvSOo4F2XdU7m0kkz0b7mKycEuC5\ndBh7St2+USyPjTJF9HQqQ2KbVP2dYdPt0rDKDoxqKLD2LbGwiTZ3OITuC8X/eKI4\n8qR7GZ8nK0TDIUlD/BZZYRU=\n-----END PRIVATE KEY-----\n",
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
