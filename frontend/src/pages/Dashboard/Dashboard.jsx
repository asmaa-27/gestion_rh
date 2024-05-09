import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Typewriter from 'typewriter-effect';





const data = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 3 },
  { name: 'Mar', value: 10 },
  { name: 'Apr', value: 15 },
  { name: 'May', value: 0 },
  { name: 'Jun', value: 12 },
  { name: 'july', value: 20 },
  { name: 'aug', value: 3 },
  { name: 'sep', value: 10 },
  { name: 'oct', value: 15 },
  { name: 'nov', value: 0 },
  { name: 'dec', value: 12 },
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
    <>
    <header className="container mx-auto pb-10 px-4 flex justify-center bg-header-bg  rounded-lg shadow-2xl   bg-cover items-center mb-20 mt-4 p-8">
    <div className="text-center lg:text-4xl font-bold text-white">
      <div className="flex-1   bg-center  h-full">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString('Bienvenue sur le site-web de management des fonctionnaires')
            .pauseFor(1000)
            .start();
          }}
        />
      </div>
    </div>
  </header>


   <main className=" p-8 pb-8 ">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

    <div className="shadow-2xl p-4  dark:bg-primary-950 dark:shadow-primary-800 rounded-md">
      <h2 className="text-lg font-bold mb-4">Charte Absences</h2>
      <LineChart width={250} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
    <div className="shadow-2xl p-4 dark:bg-primary-950 dark:shadow-primary-800 rounded-md">
      <h2 className="text-lg font-bold mb-4">Charte des Stagiaires</h2>
      <BarChart width={260} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
    <div className="shadow-2xl p-4 dark:bg-primary-950 dark:shadow-primary-800 rounded-md">
      <h2 className="text-lg font-bold mb-4">Charte de congés</h2>
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

    </>
  );
};

export default Dashboard;
