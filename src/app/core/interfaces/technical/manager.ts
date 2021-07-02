import { BehaviorSubject } from "rxjs";

export interface Manager<T> {

  data$:BehaviorSubject<T>;

}
