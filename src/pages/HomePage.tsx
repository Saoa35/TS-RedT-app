import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery("Saoa35");
  return (
    <div>
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}
    </div>
  );
}
