import BugetForm from './components/BugetForm';
import BugetHeader from './components/BugetHeader'
import BugetList from './components/BugetList';

function App() {
  return (
    <div>
      <BugetHeader />
      <div className="bottom">
        <BugetForm />
        <BugetList />
      </div>
    </div>

  );
}

export default App;
