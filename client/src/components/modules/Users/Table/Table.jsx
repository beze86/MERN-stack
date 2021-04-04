import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Housemate', width: 500 },
  { field: 'color', headerName: 'Color', width: 500 },
];

export const DataTable = ({ data, openModal }) => {

  const useStyles = makeStyles({
    root: {
      height: '400px',
      width: '100%',
      '& .MuiDataGrid-row': {
        cursor: 'pointer'
      },
      [`& [data-value="${data[0].color}"]`]: {
        backgroundColor: data[0].color,
        color: '#fff'
      },
      [`& [data-value="${data[1].color}"]`]: {
        backgroundColor: data[1].color,
        color: '#fff'
      },
      [`& [data-value="${data[2].color}"]`]: {
        backgroundColor: data[2].color,
        color: '#fff'
      },
      [`& [data-value="${data[3].color}"]`]: {
        backgroundColor: data[3].color,
        color: '#fff'
      },
      [`& [data-value="${data[4].color}"]`]: {
        backgroundColor: data[4].color,
        color: '#fff'
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DataGrid rows={data} columns={columns} pageSize={5} onCellClick={openModal} />
    </div>
  );
}
