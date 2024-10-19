import { Component } from '@angular/core';
import { typographyData } from './data';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [MatTableModule],
  template: `
    <h1 class="mat-display-large">Typography</h1>

    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef>Title</th>
        <td mat-cell [class]="element.css" *matCellDef="let element">{{element.title}}</td>
      </ng-container>
      <ng-container matColumnDef="css">
        <th mat-header-cell *matHeaderCellDef>CSS</th>
        <td mat-cell *matCellDef="let element">{{element.css}}</td>
      </ng-container>
      <ng-container matColumnDef="level">
        <th mat-header-cell *matHeaderCellDef>Typescale Level</th>
        <td mat-cell *matCellDef="let element">{{element.level}}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: ``
})
export default class TypographyComponent {
  displayedColumns: string[] = ['title', 'css', 'level'];
  dataSource = typographyData;
}
