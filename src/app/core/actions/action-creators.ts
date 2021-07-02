/**
 * Functionally Create Actions Object To Prevent MissTyped Actions
*/

import { User } from "../interfaces/functionnal/user";
import { Action } from "../interfaces/technical/action";
import { ActionUser } from "./action-user.enum";

type ActionCreator<T> = (data:T) => Action;

export const userConnect:ActionCreator<Pick<User, 'name' | 'password' >> = (data) => ({
  type:ActionUser.USER_CONNECT,
  data
});
