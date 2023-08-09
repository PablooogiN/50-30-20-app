// Generate Order Data
function createData(id, month, expense, category, amount) {
    return { id, month, expense, category, amount };
  }
  
const rows = [
    createData(
        0,
        "January",
        "Rent",
        "Needs",
        1050.00
    ),
    createData(
        0,
        "January",
        "Eating Out",
        "Wants",
        350.75
    ),
    createData(
        0,
        "January",
        "ROTH IRA",
        "Savings",
        500
    ),
    createData(
        0,
        "January",
        "Car Loan",
        "Needs",
        750
    ),
];

function createStackedData(monthList){
    let data = []
    for(let month in monthList){
        var obj = new Object();
        obj.name = month;
        obj.Needs = Math.random() * 10;
        obj.Wants = Math.random() * 10;
        obj.Savings = Math.random() * 10;
        data.push(JSON.stringify(obj))
    }
    console.log(data);
}

const stackedBarData = [
    { name: "January", Needs: 43, Wants: 56, Savings: 1},
    { name: "February", Needs: 44, Wants: 50 , Savings: 6},
    { name: "March", Needs: 57, Wants: 14, Savings: 29 },
    { name: "April", Needs: 68, Wants: 23, Savings: 9 },
    { name: "May", Needs: 45, Wants: 48, Savings: 7 },
    { name: "June", Needs: 72, Wants: 18, Savings: 10 },
    { name: "July", Needs: 58, Wants: 40, Savings: 2 }
];

const monthlyExpensesRows = [
    { id: 0, name: 'Rent', month: '2019-03-25 15:30:00', category: 'needs' , amount: 1000},
    { id: 1, name: 'Car Loan', month: '2019-03-25 15:30:00', category: 'needs' , amount: 500},
    { id: 2, name: 'Groceries', month: '2019-03-25 15:30:00', category: 'needs' , amount: 300},
    { id: 3, name: 'Eating Out', month: '2019-03-25 15:30:00', category: 'wants' , amount: 250},
    { id: 4, name: 'ROTH IRA', month: '2019-03-25 15:30:00', category: 'savings' , amount: 540},
    { id: 5, name: 'Clothes', month: '2019-03-25 15:30:00', category: 'wants' , amount: 150},
    { id: 6, name: 'Insurance', month: '2019-03-25 15:30:00', category: 'needs' , amount: 125},
];

const monthlyExpensesColumns = [
    // { field: 'id', headerName: 'ID', width: 70, },
    { field: 'name', headerName: 'Name', width: 250, editable: true},
    { 
        field: 'month',
        headerName: 'Month',
        type: 'date',
        width: 130,
        editable: true,
        valueGetter: ({ value }) => value && new Date(value),
    },
    { 
        field: 'category',
        headerName: 'category',
        width: 130,
        editable: true,
        type: 'singleSelect',
        valueOptions: ['Needs', 'Wants', 'Savings'],
    },
    { field: 'amount', headerName: 'amount', type: 'number', width: 90, editable: true},
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  

const variableData = createStackedData(["January", "February"]);

exports.rows = rows;
exports.stackedBarData = stackedBarData;
exports.monthlyExpensesRows = monthlyExpensesRows;
exports.monthlyExpensesColumns = monthlyExpensesColumns;