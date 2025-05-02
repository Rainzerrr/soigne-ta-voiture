"use client";
import { HourProps } from "@/components/atoms/hour/hour";
import RendezVousDate from "@/pages/rendez-vous/date/date";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const days: { hours: HourProps[] }[] = Array.from(
    { length: 10 },
    (_, dayIndex) => {
      const today = new Date();
      const baseDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + dayIndex
      );

      const hours: HourProps[] = Array.from({ length: 6 }, (_, i) => {
        const date = new Date(
          baseDate.getFullYear(),
          baseDate.getMonth(),
          baseDate.getDate(),
          8 + i * 2
        );

        return {
          hour: date,
          onClick: () => router.push("/rendez-vous/infos"),
        };
      });

      return { hours };
    }
  );

  return <RendezVousDate dates={days} />;
};

export default page;
