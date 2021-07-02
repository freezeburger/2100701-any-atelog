import { BehaviorSubject, Observable } from "rxjs";
import { Action } from "./action";



export interface Dispatcher<T> {

  state$:Observable<T>;
  action$:BehaviorSubject<Action>;

  dispacth(action:Action):void;

}
