import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateSiteMasterComponent } from './create-site-master/create-site-master.component';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

export interface PeriodicElement {
    no: number;
    siteId: string;
    siteName: string;
    erp: string;
    calendarId: string;
    calendarName: string;
    legalEntity: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: 1,
    siteId: 'S000001',
    siteName: 'New Orleans Site A - Central Logistics and Distribution Facility',
    erp: 'ERP-001',
    calendarId: 'CAL-123-WEEKLY-SITE-A',
    calendarName: 'Weekly Operational and Logistics Management Schedule for Site A',
    legalEntity: 'Logistics Corp Ltd.'
  },
  {
    no: 2,
    siteId: 'S000002',
    siteName: 'Baton Rouge Site B - Regional Maintenance and Operations Center',
    erp: 'ERP-002',
    calendarId: 'CAL-456-MONTHLY-SITE-B',
    calendarName: 'Monthly Equipment Maintenance and Operations Planning for Site BMonthly Equipment Maintenance and Operations Planning for Site B',
    legalEntity: 'Maintenance Solutions Inc.'
  },
  {
    no: 3,
    siteId: 'S000001',
    siteName: 'New Orleans Site A - Central Logistics and Distribution Facility',
    erp: 'ERP-001',
    calendarId: 'CAL-123-WEEKLY-SITE-A',
    calendarName: 'Weekly Operational and Logistics Management Schedule for Site A',
    legalEntity: 'Logistics Corp Ltd.'
  },
  {
    no: 4,
    siteId: 'S000002',
    siteName: 'Baton Rouge Site B - Regional Maintenance and Operations Center',
    erp: 'ERP-002',
    calendarId: 'CAL-456-MONTHLY-SITE-B',
    calendarName: 'Monthly Equipment Maintenance and Operations Planning for Site BMonthly Equipment Maintenance and Operations Planning for Site B',
    legalEntity: 'Maintenance Solutions Inc.'
  },
  {
    no: 5,
    siteId: 'S000001',
    siteName: 'New Orleans Site A - Central Logistics and Distribution Facility',
    erp: 'ERP-001',
    calendarId: 'CAL-123-WEEKLY-SITE-A',
    calendarName: 'Weekly Operational and Logistics Management Schedule for Site A',
    legalEntity: 'Logistics Corp Ltd.'
  },
  {
    no: 6,
    siteId: 'S000002',
    siteName: 'Baton Rouge Site B - Regional Maintenance and Operations Center',
    erp: 'ERP-002',
    calendarId: 'CAL-456-MONTHLY-SITE-B',
    calendarName: 'Monthly Equipment Maintenance and Operations Planning for Site BMonthly Equipment Maintenance and Operations Planning for Site B',
    legalEntity: 'Maintenance Solutions Inc.'
  },

];

@Component({
  selector: 'app-site-master',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
     CommonModule,
    ],
  templateUrl: './site-master.component.html',
  styleUrl: './site-master.component.scss'
})
export class SiteMasterComponent {

  simpleDialog?: MatDialogRef<CreateSiteMasterComponent>;

   displayedColumns: string[] = [
      'no',
      'siteId',
      'siteName',
      'legalEntity',
      'erp',
      'calendarId',
      'calendarName',
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
      this.simpleDialog = this.dialogModel.open(CreateSiteMasterComponent);
    }

}
