import "./RightChart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '',
    amt: 2500,
  },
  {
    name: 'january',
    amt: 1810,
  },
  {
    name: 'february',
    amt: 1790,
  },
  {
    name: 'march',
    amt: 2600,
  },
  {
    name: 'april',
    amt: 2881,
  },
  {
    name: 'may',
    amt: 2500,
  },
  {
    name: 'june',
    amt: 4300,
  },
];
const RightChart = () => {
  return (
    <div className="rightchart">
          <div className="title">Last 6 month (Revenue)</div>
     <ResponsiveContainer width="80%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#82ca9d" fill="#9428CA" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RightChart