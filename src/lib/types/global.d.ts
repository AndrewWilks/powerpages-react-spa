export interface PowerUser {
  id: string;
  name: string;
  roles: string[];
}

declare global {
  interface Window {
    powerUser?: PowerUser;
  }
}
