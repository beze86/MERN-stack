import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Housemate', width: 500 },
  { field: 'color', headerName: 'Color', width: 500 },
];

export const DataTable = ({data, openModal}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} onCellClick={openModal} />
    </div>
  );
}
