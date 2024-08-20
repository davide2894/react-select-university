import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { University } from "../../types";
import "./SelectUniversity.css";

function SelectUniversity() {
  const [query, setQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  console.log({ query });

  async function fetchUniversities(): Promise<University[]> {
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=${query.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUniversity(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    if (event.key === "Enter") {
      setSelectedUniversity(event.currentTarget.value);
    }
  };

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
      {isError && <div>Error fetching data</div>}

      <div className="universityList">
        <label>
          Università nel mondo:
          <select
            id="universitySelect"
            disabled={query.length < 3}
            value={selectedUniversity}
            onChange={handleSelectChange}
            onKeyDown={handleKeyDown}>
            {data &&
              data.length >= 3 &&
              data.map((university: University) => (
                <option key={university.name} value={university.name}>
                  {university.name}
                </option>
              ))}
          </select>
          {data && data.length === 0 && <div>No results found...</div>}
        </label>
      </div>
    </>
  );
}

export default SelectUniversity;
