import { Button } from "primereact/button";
import { useAuth } from "@lib/hooks/useAuth";

import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { fetchUser } from "@lib/api/dataverse/fetchUser";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const user = useAuth();
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: !!user, // Only fetch if user is authenticated
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data</div>;
  }

  return (
    <div>
      <h1>{user ? "Welcome " + userData.name : "Welcome"}</h1>
      <Button label="Click me" />
    </div>
  );
}
