import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuItemComponent } from './nav-menu-item.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { sideNavPath } from '../../../../nav-routing';

describe('NavMenuItemComponent', () => {
    let component: NavMenuItemComponent;
    let fixture: ComponentFixture<NavMenuItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavMenuItemComponent],
            imports: [
                MatIconModule,
                RouterTestingModule.withRoutes([
                    {
                        path: sideNavPath,
                        children: [],
                    },
                ]),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavMenuItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
