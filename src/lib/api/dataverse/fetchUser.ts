import { userSchema, type User } from "../../schema/dataverse/user";

export async function fetchUser(): Promise<User> {
  if (import.meta.env.DEV) {
    // Fallback for development mode
    return {
      id: crypto.randomUUID(),
      name: "Dev User",
    } as User;
  }

  const res = await fetch("/_api/contacts/me"); // adjust for your API
  const json = await res.json();
  return userSchema.parse(json);
}
