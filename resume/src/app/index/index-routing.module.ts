import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: '**', pathMatch:'full', redirectTo: ''}
];

export const IndexRouting = RouterModule.forChild(routes);