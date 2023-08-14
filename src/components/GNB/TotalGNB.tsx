import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export const TotalGNB = () => {
  return (
    <div className=' px-2'>
      <Button variant="contained" sx={{mx:2}} >
        <Link to="/">이미지자리</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to="/calculate">정산페이지</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to="/settlement">결산내역 조회</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to="/inventory">냉장고 재고 현황</Link>
      </Button>
      <Button variant="contained" sx={{mx:2}} >
        <Link to="/cookingDB">요리별 DB</Link>
      </Button>
    </div>
  );
};
