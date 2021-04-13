import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    SidebarModule,
    ButtonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
