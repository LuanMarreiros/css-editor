import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
{path: 'css', component: ToolbarComponent},
{path: 'css/:option', component: ToolbarComponent},
{path: '', redirectTo: 'css', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent},

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }