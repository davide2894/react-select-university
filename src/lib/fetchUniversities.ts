import { University } from "../types";

async function fetchUniversities(query: string): Promise<University[]> {
  const response = await fetch(
    `http://universities.hipolabs.com/search?name=${query.toLowerCase()}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default fetchUniversities;
