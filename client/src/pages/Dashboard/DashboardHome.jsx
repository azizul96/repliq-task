import { AiFillDashboard, } from "react-icons/ai";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const data = [
    {
      name: 'User',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Product',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Customer',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Order',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
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
const DashboardHome = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold p-4 bg-rose-600 text-white rounded-md mb-1 flex justify-center items-center gap-2"><AiFillDashboard />Dashboard </h1>
            <div className="flex justify-center my-20">
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </div>
        </div>
    );
};

export default DashboardHome;