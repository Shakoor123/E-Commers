import "./RightChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import { useMemo } from "react";

const RightChart = () => {
  const month = useMemo(() => [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nuv",
    "des",
  ]);
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getUserStats = async () => {
      try {
        const datas = await userRequest.get("/users/status");
        setUserStats(datas.data);
        // respo.data.map((item) => setUserStats((prev) => [...prev, item]));
      } catch (err) {
        console.log(err);
      }
    };
    getUserStats();
  }, []);

  return (
    <div className="rightchart">
      <div className="title">User Analatics</div>
      <ResponsiveContainer width="90%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={userStats}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="_id" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stackId="1"
            stroke="#82ca9d"
            fill="#9428CA"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RightChart;
