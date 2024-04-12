import {Information} from "../../../models/information.model";

export interface HottestInformationModel{
  main_information:Information|null;
  other_information:Information[]|null;
}
