// task_3/js/crud.js

export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }
  
  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
    return rowId;
  }


// task_3/js/crud.d.ts

import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
