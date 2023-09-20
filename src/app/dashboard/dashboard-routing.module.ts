import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {IndexComponent} from "./index/index.component";


const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: 'index',
                component: IndexComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
