import type { PowerUser } from "@lib/types/global";

export function useAuth(): PowerUser | null {
  if (typeof window === "undefined") return null;

  if (!window.powerUser) {
    if (import.meta.env.DEV) {
      // Only in dev mode: fallback
      window.powerUser = {
        id: crypto.randomUUID(),
        name: "Dev User",
        roles: ["Admin"],
      };
    } else {
      return null;
    }
  }

  return window.powerUser!;
}
