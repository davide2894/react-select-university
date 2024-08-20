import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { University } from "../../types";

function SelectUniversity() {
  const [query, setQuery] = useState("");

  console.log({ query });

  async function fetchUniversities(): Promise<University[]> {
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ["universities"],
    queryFn: fetchUniversities,
    enabled: query.length >= 3,
  });

  console.log({ data });

  return (
    <>
      <div>SelectUniversity</div>
      <input
        type="text"
        placeholder="Search University..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}

      {data && (
        <select>
          {data.map((university: University) => (
            <option key={university.name} value={university.name}>
              {university.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default SelectUniversity;
