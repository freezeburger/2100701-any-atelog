import { FunctionalState } from "./functionnal/functional-state";
import { TechnicalState } from "./technical/technical-state";

export interface ApplicationState extends FunctionalState, TechnicalState{}
