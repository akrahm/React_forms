import './App.css';
import UserDetails from './components/UserDetails';
import UsersListing from './components/UsersListing';


const App =() => {
  return (
    <div className="App">
        <UsersListing />
        <UserDetails />
    </div>
  );
}

export default App;
