import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssEditorComponent } from './components/css-editor/css-editor.component';
import { ListaOpcoesComponent } from './components/lista-opcoes/lista-opcoes.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CssEditorComponent,
    ListaOpcoesComponent,
    SidenavComponent,
    TextEditorComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
