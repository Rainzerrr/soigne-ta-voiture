import { Suspense } from "react";
import { EventHourProps } from "@/components/atoms/hour/hour";
import RendezVousDate from "@/pages/rendez-vous/date/date";
import { getEvents } from "@/lib/getEvents";

const RendezVousDateWrapper = ({ events }: { events: EventHourProps[] }) => {
  return <RendezVousDate events={events} />;
};

const Page = async () => {
  const events = await getEvents();
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <RendezVousDate events={events} />
    </Suspense>
  );
};

export default Page;
