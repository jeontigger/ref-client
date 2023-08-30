import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { RouteConst } from '../../interface/RouteConst';


export const TotalGNB = () => {
  return (
    <div className=' px-2'>
      <Button variant="contained" sx={{mx:2}} >
        <Link to={RouteConst.HomePage}>이미지자리</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to={RouteConst.settlement}>정산페이지</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to={RouteConst.TotalReview}>결산내역 조회</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to={RouteConst.Inventory}>냉장고 재고 현황</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to={RouteConst.CookingDB}>요리별 DB</Link>
      </Button>
    </div>
  );
};
