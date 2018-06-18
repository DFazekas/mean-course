/* The Module file defines the building blocks of our Angular app. 
  * Components are not the only but the most important building block.
*/

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MatInputModule, 
  MatCardModule, 
  MatButtonModule, 
  MatToolbarModule,
  MatExpansionModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  /* Registering our component so that Anguler is aware of it.
    * But this alone only allows us to use this component in other Angular components.
    * Not in the index.html file. */
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,  // Unlocks all the Angular Material input components.
    MatCardModule,  // Material Cards.
    MatButtonModule, // Material Buttons.
    MatToolbarModule,  // Material Toolbar.
    MatExpansionModule // Collapsable panel.    
  ],
  providers: [],
  /* Adding the component here allows using it within the index.html file. */
  bootstrap: [AppComponent]
})
export class AppModule { }
