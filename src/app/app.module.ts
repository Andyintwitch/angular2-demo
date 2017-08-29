import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, JsonpModule, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';

// modules
import { AppRoutingModule} from './app-routing/app-routing.module'

// services
import { OrderV2AdminService } from "app/services/orderv2-admin/orderv2-admin-service";

// export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
//   return  new Http(xhrBackend, requestOptions);
// }

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OrderListComponent
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    Http,
    OrderV2AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
