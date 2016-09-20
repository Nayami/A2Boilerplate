import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent} from "./components/app.notfound.component";
import { ProfileComponent } from "./components/app.profile.component";

const appRoutes: Routes = [
	{ path: '', component: ProfileComponent },
	{ path: 'user', component: ProfileComponent },

	{ path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);