import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 3 },
  { name: 'Mar', value: 10 },
  { name: 'Apr', value: 15 },
  { name: 'May', value: 0 },
  { name: 'Jun', value: 12 },
];

const pieData = [
  { name: 'Mars', value: 20 },
  { name: 'Avril', value: 30 },
  { name: 'May', value: 20 },
  { name: 'Jaune', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <main className="bg-gray-100 p-8">
      {/* <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      </div> */}

      <h1 className="text-2xl font-bold mt-8 mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Card 1</h2>
          <p>Content for Card 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Card 2</h2>
          <p>Content for Card 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Card 3</h2>
          <p>Content for Card 3</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Charte Absences</h2>
          <LineChart width={250} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Charte des Stagiaires</h2>
          <BarChart width={260} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Charte de congés</h2>
          <PieChart width={250} height={200}>
            <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;