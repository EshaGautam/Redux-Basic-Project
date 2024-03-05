import Counter from './components/Counter';
import Header from '../src/components/Header'
import Auth from '../src/components/Auth'
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.Authenticated);
  return (
    <div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile/>}
      <Counter />
    </div>
  );
}

export default App;
