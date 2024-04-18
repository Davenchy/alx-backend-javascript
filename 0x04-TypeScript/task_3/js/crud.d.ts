import { RowId, RowElement } from './interface';

export type IInsertRow = (row: RowElement) => RowId;
export type IDeleteRow = (id: RowId) => void;
export type TGetRow = (id: RowId, row: RowElement) => RowId;
