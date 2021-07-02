import { User } from "./user";

export interface Room {
  id:number;
  title:string;
  users:User[];
}
