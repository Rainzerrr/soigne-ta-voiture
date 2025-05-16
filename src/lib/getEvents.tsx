export async function getEvents() {
  console.log(`Base url : ${process.env.BASE_URL}/api/get-events`);
  const res = await fetch(`${process.env.BASE_URL}/api/get-events`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.events;
}
