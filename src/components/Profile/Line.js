import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Monday', foods: 4000, berverages: 2400, desserts: 2400,
  },
  {
    name: 'Tuesday', foods: 3000, berverages: 1398, desserts: 2210,
  },
  {
    name: 'Wednesday', foods: 2000, berverages: 9800, desserts: 2290,
  },
  {
    name: 'Thursday', foods: 2780, berverages: 3908, desserts: 2000,
  },
  {
    name: 'Friday', foods: 1890, berverages: 4800, desserts: 2181,
  },
  {
    name: 'Saturday', foods: 2390, berverages: 3800, desserts: 2500,
  },
  {
    name: 'Sunday', foods: 3490, berverages: 4300, desserts: 2100,
  },
];

export default class LineComp extends PureComponent {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nptzh7ez/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="berverages" stroke="#8884d8" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="foods" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        <Line type="monotone" dataKey="desserts" stroke="#e74c3c" strokeDasharray="3 4 5 2" />
      </LineChart>
    );
  }
}
