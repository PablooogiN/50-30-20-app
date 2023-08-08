import React from 'react';
import { useTheme } from "@material-ui/core/styles";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,
        Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Title from "./Title";

const { stackedBarData } = require('../data/TransactionData.js');
  
const Rechart = () => {

  const theme = useTheme();
  
    return (
      <React.Fragment>
        <Title>Overview</Title>
        <ResponsiveContainer width="90%" height={500}>
            <BarChart 
                width={1000} height={500} data={stackedBarData} layout={'vertical'}
                margin={{
                    top: 20,
                    right: 0,
                    left: 90,
                    bottom: 50,
                    }}
            >
                <CartesianGrid horizontal={false} vertical={false}/>
                <XAxis type="number" hide={true} stroke={theme.palette.text.secondary} />
                <YAxis type="category" dataKey="name" stroke={theme.palette.text.secondary} />
                <Tooltip />
                <Legend verticalAlign="top"/>
                <Bar dataKey="Needs" stackId="a" fill={theme.palette.text.secondary}/>
                <Bar dataKey="Wants" stackId="a" fill={theme.palette.primary.main}/>
                <Bar dataKey="Savings" stackId="a" fill="gray" />
            </BarChart>
        </ResponsiveContainer>
        </React.Fragment>
    );
}
  
export default Rechart;