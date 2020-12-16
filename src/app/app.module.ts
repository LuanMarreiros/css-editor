import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssEditorComponent } from './components/css-editor/css-editor.component';
import { ListaOpcoesComponent } from './components/lista-opcoes/lista-opcoes.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { ShadowEditorComponent } from './components/shadow-editor/shadow-editor.component';
import { BorderEditorComponent } from './components/border-editor/border-editor.component';
import { ColorEditorComponent } from './components/color-editor/color-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CssEditorComponent,
    ListaOpcoesComponent,
    SidenavComponent,
    TextEditorComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    ShadowEditorComponent,
    BorderEditorComponent,
    ColorEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
