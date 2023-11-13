import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Me} from "../../models/user.model";
import {Subject} from "../../models/subject.model";
import {CategoryModel} from "../../models/category.model";

export const categoriesAllAdapter = createEntityAdapter<CategoryModel[]>();

export const categoryAllState: EntityState<CategoryModel[]> = categoriesAllAdapter.getInitialState();
