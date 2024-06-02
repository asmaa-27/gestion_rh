import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFonctionnaireCountByMonth } from '../../features/FontionnairesSlice';
import { fetchDemandeAbsenceCountByMonth } from '../../features/DemandAbsenceSlice';
import { fetchFormationCountByMonth } from '../../features/FormationSlice';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Typewriter from 'typewriter-effect';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const dispatch = useDispatch();

  // For fonctionnaire
  const { loading: fonctionnaireLoading, error: fonctionnaireError, fonctionnaireCountByMonth } = useSelector((state) => state.fonctionnaire);

  // For demandes
  const { loading: demandeLoading, error: demandeError, demandeAbsenceCountByMonth } = useSelector((state) => state.demandeAbsence);

  // For formations
  const { loading: formationLoading, error: formationError, formationCountByMonth } = useSelector((state) => state.formation);

  useEffect(() => {
    dispatch(fetchFonctionnaireCountByMonth());
    dispatch(fetchDemandeAbsenceCountByMonth());
    dispatch(fetchFormationCountByMonth());
  }, [dispatch]);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fonctionnaireChartData = fonctionnaireCountByMonth.map(item => ({
    month: monthNames[item.month - 1], // Convert month number to month name
    count: item.count
  }));

  const demandeChartData = demandeAbsenceCountByMonth.map(item => ({
    month: monthNames[item.month - 1], // Convert month number to month name
    count: item.count
  }));

  const formationChartData = formationCountByMonth.map(item => ({
    month: monthNames[item.month - 1], // Convert month number to month name
    count: item.count
  }));

  return (
    <>
      <header className="container mx-auto pb-10 px-4 flex justify-center bg-header-bg rounded-lg shadow-2xl bg-cover items-center mb-20 mt-4 p-8 dark:bg-dark-bg">
        <div className="text-center lg:text-4xl font-bold text-white">
          <div className="flex-1 bg-center h-full">
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

      <main className="p-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex shadow-2xl p-4 dark:bg-primary-950 dark:shadow-primary-800 rounded-md">
            <div className="flex-grow">
              <h2 className="text-lg font-bold mb-4">Charte Fonctionnaires</h2>
              {fonctionnaireLoading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary-600"></div>
                  <p className="text-lg font-bold text-gray-600"></p>
                </div>
              ) : fonctionnaireError ? (
                <div>Error: {fonctionnaireError}</div>
              ) : (
                <LineChart width={400} height={300} data={fonctionnaireChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" />
                  <Legend />
                </LineChart>
              )}
            </div>
          </div>

          <div className="flex shadow-2xl p-4 dark:bg-primary-950 dark:shadow-primary-800 rounded-md">
            <div className="flex-grow">
              <h2 className="text-lg font-bold mb-4">Charte des Demandes des Absence</h2>
              {demandeLoading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary-600"></div>
                  <p className="text-lg font-bold text-gray-600"></p>
                </div>
              ) : demandeError ? (
                <div>Error: {demandeError}</div>
              ) : (
                <PieChart width={500} height={400}>
                  <Pie data={demandeChartData} dataKey="count" nameKey="month" cx="50%" cy="50%" outerRadius={120}>
                    {demandeChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              )}
            </div>
          </div>
        </div>

        <div className="flex shadow-2xl p-4 dark:bg-primary-950 dark:shadow-primary-800 rounded-md mt-4">
          <div className="flex-grow">
            <h2 className="text-lg font-bold mb-4">Charte de Formation</h2>
            {formationLoading ? (
              <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary-600"></div>
                  <p className="text-lg font-bold text-gray-600"></p>
                </div>
            ) : formationError ? (
              <div>Error: {formationError}</div>
            ) : (
              <BarChart width={500} height={300} data={formationChartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="count" fill="#ffc658" />
                <Legend />
              </BarChart>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
