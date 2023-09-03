import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Title from "./Title";

const { monthlyExpensesRows, monthlyExpensesColumns} = require('../data/TransactionData.js');

export default function DataTable() {
    const theme = useTheme();

    const handleUpdateAllRows = () => {
        console.log('pressed')
      };

    return (
    <React.Fragment>
        <Title>Monthly Categories</Title>
        <Box sx={{ width: '100%' }}>
            <Stack direction="row" spacing={1}>
                <Button size="small" onClick={handleUpdateAllRows}>
                Update a row
                </Button>
                <Button size="small" onClick={handleUpdateAllRows}>
                Update all rows
                </Button>
                <Button size="small" onClick={handleUpdateAllRows}>
                Delete a row
                </Button>
                <Button size="small" onClick={handleUpdateAllRows}>
                Add a row
                </Button>
            </Stack>
            <Box sx={{ height: 475, color: theme.palette.primary.main}}>
                <DataGrid
                autoHeight {...monthlyExpensesRows}
                rows={monthlyExpensesRows}
                columns={monthlyExpensesColumns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                sx={{
                    '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
                    color: theme.palette.text.secondary,
                },
                }}
                pageSizeOptions={[5, 10]}
                />
            </Box>
        </Box>
    </React.Fragment>
    );
}