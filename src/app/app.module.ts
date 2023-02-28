import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './services/books.service';
import { StartComponent } from './start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BooksComponent,
    BookComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }