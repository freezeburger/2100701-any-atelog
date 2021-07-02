import { User } from "./user";

export interface UserState {
  users:User[];
  connectedUser:User | null;
}
