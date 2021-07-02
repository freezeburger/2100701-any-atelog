import { ActionRoom } from "../../actions/action-room.enum";
import { ActionTechnical } from "../../actions/action-technical.enum";
import { ActionUser } from "../../actions/action-user.enum";


export interface Action {
  type:ActionRoom | ActionUser |  ActionTechnical;
  data:any;
}

