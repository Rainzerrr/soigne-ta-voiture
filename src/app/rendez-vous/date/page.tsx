import RendezVousDate from "@/pages/rendez-vous/date/date";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <RendezVousDate />
    </Suspense>
  );
};

export default page;
