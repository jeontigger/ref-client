import { Link } from 'react-router-dom';
import { RouteConst } from '../../interface/RouteConst';
import { Header } from '../../components/header/Header';

export const Homepage = () => {
  return (
    <>
      <Header/>
      <div>
        <Link to={RouteConst.LandingPage}>눌러볼래?</Link>
      </div>
    </>
  );
};
