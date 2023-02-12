import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery("Saoa35");
  const [search, setSearch] = useState("");

  const debounced = useDebounce(search);

  useEffect(() => {
    console.log(search);
  }, [search]);

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
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Write a function that takes a positive integer n, sums all the cubed
          values from 1 to n (inclusive), and returns that sum. Assume that the
          input n will always be a positive integer. Examples: (Input -- output)
          2 -- 9 (sum of the cubes of 1 and 2 is 1 + 8) 3 -- 36 (sum of the
          cubes of 1, 2, and 3 is 1 + 8 + 27)
        </div>
      </div>
    </div>
  );
}
