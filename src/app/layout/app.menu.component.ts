import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Reports', icon: 'pi pi-fw pi-home', routerLink: ['/reports'] },
                ]
            },
            {
                label: 'Freight',
                items: [
                    { label: 'Quote Requests', icon: 'pi pi-fw pi-pound', routerLink: ['/quote-requests'] },
                    { label: 'Shipment Requests', icon: 'pi pi-fw pi-box', routerLink: ['/shipment-requests'] },
                    { label: 'Shipments', icon: 'pi pi-fw pi-truck', routerLink: ['/shipments'] },
                    { label: 'Orders', icon: 'pi pi-fw pi-book', routerLink: ['/orders'] },
                ]
            },
            {
                label: 'Configuration',
                icon: 'pi pi-fw pi-wrench',
                items: [
                    {
                        label: 'Setup',
                        icon: 'pi pi-fw pi-wrench',
                        items: [
                            {
                                label: 'Roles',
                                icon: 'pi pi-fw pi-cog',
                                routerLink: ['/roles']
                            },
                            {
                                label: 'Reports Management',
                                icon: 'pi pi-fw pi-table',
                                routerLink: ['/report-management']
                            },
                            {
                                label: 'Report Groups',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/report-groups']
                            }
                        ]
                    },
                    {
                        label: 'Users',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/users']
                    },
                    {
                        label: 'Data',
                        icon: 'pi pi-fw pi-database',
                        items: [
                            {
                                label: 'Freight Forwarders',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/freight-forwarders']
                            },
                            {
                                label: 'Products',
                                icon: 'pi pi-fw pi-table',
                                routerLink: ['/products']
                            },
                            {
                                label: 'Business Divisions',
                                icon: 'pi pi-fw pi-building',
                                routerLink: ['/business-divisons']
                            },
                            {
                                label: 'Business Units',
                                icon: 'pi pi-fw pi-shopping-bag',
                                routerLink: ['/business-units']
                            },
                        ]
                    }
                ]
            }
        ];
    }
}
