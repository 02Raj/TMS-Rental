import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';

export interface PeriodicElement {
    no: number;
    name: string;
    email: string;
    userName: string;
    empId: string;
    roles: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: 1,
    name: 'Praham Xavier',
    email: 'xavier.praham@tmsinternationsl.com',
    userName: 'New Orleans Site A - Central Logistics and Distribution Facility',
    empId: 'ERP-001',
    roles: 'Supervisor'
  },
  {
    no: 2,
    name: 'Emily Chen',
    email: 'emily.chen@tmsinternationsl.com',
    userName: 'Los Angeles Site B - West Coast Operations',
    empId: 'ERP-002',
    roles: 'Supervisor'
  },
  {
    no: 3,
    name: 'David Lee',
    email: 'david.lee@tmsinternationsl.com',
    userName: 'New York Site C - East Coast Logistics',
    empId: 'ERP-003',
    roles: 'Supervisor'
  },
  {
    no: 4,
    name: 'Sophia Patel',
    email: 'sophia.patel@tmsinternationsl.com',
    userName: 'Chicago Site D - Midwest Distribution',
    empId: 'ERP-004',
    roles: 'Supervisor'
  },
  {
    no: 5,
    name: 'Michael Kim',
    email: 'michael.kim@tmsinternationsl.com',
    userName: 'Houston Site E - Gulf Coast Operations',
    empId: 'ERP-005',
    roles: 'Operator'
  },
  {
    no: 6,
    name: 'Olivia Brown',
    email: 'olivia.brown@tmsinternationsl.com',
    userName: 'Seattle Site F - Pacific Northwest Logistics',
    empId: 'ERP-006',
    roles: 'Operator'
  },
 


];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
     CommonModule,
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

   simpleDialog?: MatDialogRef<CreateUserComponent>;
  
     displayedColumns: string[] = [
        'no',
        'name',
        'email',
        'userName',
        'empId',
        'roles',
        'assignedAssets',
        'action',
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
      constructor(
        private dialogModel: MatDialog,
      ) {
        //constructor
      }
      ngOnInit() {
        this.dataSource2.paginator = this.paginator;
      }
  
      dialog() {
        this.simpleDialog = this.dialogModel.open(CreateUserComponent);
      }
  
}
