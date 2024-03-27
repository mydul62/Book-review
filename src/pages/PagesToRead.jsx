import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // Import ResponsiveContainer
import { getReadDataInfo } from '../Hooks/useReadBooks';
import { Link } from "react-router-dom";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const [data, setGraphData] = useState([]);
  const graphdata = getReadDataInfo();
  
  useEffect(() => {
    setGraphData(graphdata);
  }, []);

  if (data.length === 0) {
    return (
      <div className="flex max-w-[1280px] w-[95%] justify-center min-h-[calc(100vh-120px)] items-center">
        <div className="text-center space-y-6">
          <h2 className="font-semibold font-Playfair mb-6 text-2xl">You Read book 0%</h2>
          <Link to={"/"}>
            <button className="py-2 text-white rounded-xl px-5 bg-primary">Read Book</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        className='max-w-7xl mx-auto flex justify-center items-center'
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <Tooltip />
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PagesToRead;
