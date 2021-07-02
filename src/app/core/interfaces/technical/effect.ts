
import { DispatcherService } from "../../services/facade/dispatcher.service";

export interface Effect<T> {
  service:T;
  dispatcher:DispatcherService;
  byType(action: any): boolean;
}

