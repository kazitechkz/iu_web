import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {TechSupportType} from "../../../models/techSupportType.model";
import {TechSupportCategory} from "../../../models/techSupportCategory.model";


export const getTechSupportCategoriesAdapter = createEntityAdapter<TechSupportCategory[]>();

export const getTechSupportCategoriesState: EntityState<TechSupportType[]> = getTechSupportCategoriesAdapter.getInitialState();
