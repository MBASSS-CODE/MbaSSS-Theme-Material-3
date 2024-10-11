import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  id: number;
  name: string;
  jenisRevisi: string;
  paguBelanja: string;
  nomorDipa: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, name: 'Hydrogen', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 2, name: 'Helium', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 3, name: 'Lithium', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 4, name: 'Beryllium', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 5, name: 'Boron', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 6, name: 'Carbon', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 7, name: 'Nitrogen', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 8, name: 'Oxygen', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 9, name: 'Fluorine', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 10, name: 'Neon', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 11, name: 'Sodium', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 12, name: 'Magnesium', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 13, name: 'Aluminum', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 14, name: 'Silicon', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 15, name: 'Phosphorus', jenisRevisi: 'SATKER_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 16, name: 'Sulfur', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 17, name: 'Chlorine', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 18, name: 'Argon', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 19, name: 'Potassium', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
  {id: 20, name: 'Calcium', jenisRevisi: 'DIPA_REVISI', paguBelanja: '400.378.371.000', nomorDipa: 'DIPA-048.01.1.427950/2024'},
];
/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
