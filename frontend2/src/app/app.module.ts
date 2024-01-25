// Import necessary Angular modules and components
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // Update the path
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CarouselModule,
  ],
  providers: [], // Add services if needed
})
export class AppModule {}
