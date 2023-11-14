import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {SubCategoryModel} from "../../../models/subCategory.model";

export const subCategoriesAllAdapter = createEntityAdapter<SubCategoryModel[]>();

export const subCategoryAllState: EntityState<SubCategoryModel[]> = subCategoriesAllAdapter.getInitialState();
