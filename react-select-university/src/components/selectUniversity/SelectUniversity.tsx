import { useState } from "react";
import { University } from "../../types";
import "./SelectUniversity.css";
import { useQuery } from "@tanstack/react-query";

type SelectUniversityProps = {
  disabled: boolean;
  label: string;
  onObjectSelected: (item: string) => void;
};

function SelectUniversity({
  disabled,
  label,
  onObjectSelected,
}: SelectUniversityProps) {
  const [query, setQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const { isError, data } = useQuery({
    queryKey: ["universities"],
    queryFn: fetchUniversities,
    enabled: query.length >= 3,
  });

  console.log({ query, data });

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
    onObjectSelected(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    if (event.key === "Enter") {
      setSelectedUniversity(event.currentTarget.value);
      onObjectSelected(event.currentTarget.value);
    }
  };

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
          {label}
          <select
            id="universitySelect"
            disabled={disabled}
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
