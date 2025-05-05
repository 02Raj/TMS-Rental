import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
export interface PeriodicElement {
    // id:string,
  // equipment:string,
  // created:string
  // customer:string,
  // phone: string,
  // operator:string
  // approvedBy:string,
  // status:string,
  // priority:string,
  equipment: string;
  id: string;
  customer: string;
  operator: string;
  approvedBy: string;
  priority: String;
  created:string;
  phone:string;
  status:string;
  // salary: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: '12354',
    equipment: 'Loader – Hitachi ZW370-6 or Komatsu\nGradall 3210 with Hammer attachment',
    created: '11/09/2024',
    customer: 'Louisiana Environmental Concepts, LLC',
    phone: '(337) 852-6441',
    operator: '',
    approvedBy: '',
    status: 'New Service',
    priority: 'Low',
  },
  {
    id: '34356',
    equipment: 'Grant 360 BDRE...\nStreet Sweeper with magnetic bar...',
    created: '08/10/2024',
    customer: 'Louisiana Environmental Concepts, LLC',
    phone: '(337) 852-6441',
    operator: 'Joe, Ross',
    approvedBy: 'Lucas...\nSupervisor',
    status: 'Completed',
    priority: 'High',
  }

];


@Component({
  selector: 'app-service-request',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
     CommonModule,
  ],
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.scss'
})
export class ServiceRequestComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'equipment',
    'customer',
    'operator',
    'approvedBy',
    'status',
    'priority',
    'action'
  ];
  dataSource = ELEMENT_DATA;
  dataSource2 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource3 = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }
  breadscrums = [
    {
      title: 'Material',
      items: ['Tables'],
      active: 'Material',
    },
  ];
  constructor() {
    //constructor
  }
  ngOnInit() {
    this.dataSource2.paginator = this.paginator;
  }
  viewRow(row: any): void {
    console.log('View clicked', row);
  }
  
  editRow(row: any): void {
    console.log('Edit clicked', row);
  }
  
  deleteRow(row: any): void {
    console.log('Delete clicked', row);
  }
  


}
