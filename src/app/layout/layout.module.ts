import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SideNavComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule, MatListModule, MatToolbar, MatIcon],
  exports: [SideNavComponent, HeaderComponent],
})
export class LayoutModule {}
