export async function getEvents() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/get-events`, {
      cache: "no-store",
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data.events;
  } catch (e) {
    console.log(e);
  }
}
