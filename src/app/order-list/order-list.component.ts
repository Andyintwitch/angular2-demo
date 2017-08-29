import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderV2AdminService } from '../services/orderv2-admin/orderv2-admin-service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: String[] = [];

  constructor(
    private OrderV2AdminService: OrderV2AdminService
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.OrderV2AdminService.getOrderList()
    .then(res => this.orders = res);
  }

}
