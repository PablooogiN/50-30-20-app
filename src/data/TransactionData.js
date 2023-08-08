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

const variableData = createStackedData(["January", "February"]);

exports.rows = rows;
exports.stackedBarData = stackedBarData;