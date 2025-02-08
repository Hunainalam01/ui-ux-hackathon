import { client } from "./lib/client";

export default async function FetchData() {
  const data = await client.fetch(`*[_type == "product"]`);
  return data;
}


export async function fetchFourData () {
  const fourData = await client.fetch(`[_typer == "product"] [0..3]
    `)
  return fourData;
}
