import { useState } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery("Saoa35");
  const [search, setSearch] = useState("");
  return (
    <div>
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github Username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
