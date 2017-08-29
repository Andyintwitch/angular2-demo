import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import Order from '../../models/order';

@Injectable()
export class OrderV2AdminService {
    private host: String = "https://api-test.unshackled.com/admin/orderv2";

    constructor(private http: Http) {}

    getOrderList(): Promise<String[]> {
        console.log('getOrderList');
        return this.http.get('/orders')
        .toPromise()
        .then(response => response.json().data as String[])
        .catch(this.handleError)
    }

    getOrder(orderId: String): Promise<Order> {
        console.log('getOrder');
        return this.http.get(`/orders/${orderId}`)
        .toPromise()
        .then(response => response.json().data as Order)
        .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}