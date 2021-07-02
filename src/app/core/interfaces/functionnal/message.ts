import { User } from "./user";

export interface Message {
  id:number;
  text:string;
  date:number;
  author:User;
}
