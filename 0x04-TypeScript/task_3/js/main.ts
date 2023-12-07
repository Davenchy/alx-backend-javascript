/// <reference path="./crud.d.ts" />
import { RowId, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowId: RowId = CRUD.insertRow(row);
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updateRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowId, updateRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(newRowId);
// Delete row id 125
