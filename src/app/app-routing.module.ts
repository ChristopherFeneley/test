import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '/', redirectTo: '/dashboard' },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./feature/quote-request/quote-request.module').then(m => m.QuoteRequestModule) },
                    { path: 'quote-request', loadChildren: () => import('./feature/quote-request/quote-request.module').then(m => m.QuoteRequestModule) },
                    { path: 'shipment', loadChildren: () => import('./feature/shipment/shipment.module').then(m => m.ShipmentModule) },
                    { path: 'shipment-request', loadChildren: () => import('./feature/shipment-request/shipment-request.module').then(m => m.ShipmentRequestModule) },                ]
            },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
