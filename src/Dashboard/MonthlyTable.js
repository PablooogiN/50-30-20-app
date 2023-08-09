import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";
import { DataGrid } from '@mui/x-data-grid';
import Title from "./Title";

const { monthlyExpensesRows, monthlyExpensesColumns} = require('../data/TransactionData.js');

export default function DataTable() {
    const theme = useTheme();
    return (
    <React.Fragment>
        <Title>Monthly Categories</Title>
        <Box sx={{ height: 475, width: '100%', color: theme.palette.primary.main}}>
            <DataGrid
            autoHeight {...monthlyExpensesRows}
            rows={monthlyExpensesRows}
            columns={monthlyExpensesColumns}
            // initialState={{
            //     pagination: {
            //     paginationModel: { page: 0, pageSize: 10 },
            //     },
            // }}
            // pageSizeOptions={[5, 10]}
            />
        </Box>
    </React.Fragment>
    );
}