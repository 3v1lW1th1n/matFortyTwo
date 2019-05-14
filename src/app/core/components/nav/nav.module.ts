import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';
import { LogoModule } from '../logo/logo.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';

@NgModule({
    declarations: [NavComponent, NavMenuItemComponent, NavToolbarComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        LogoModule,
        FlexLayoutModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
})
export class NavModule {}
