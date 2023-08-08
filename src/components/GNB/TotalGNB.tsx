import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const TotalGNB = () => {
  return (
    <>
      <Button variant="contained" >
        <Link to="/">이미지자리</Link>
      </Button>
      <Button variant="contained" >
        <Link to="/calculate">정산페이지</Link>
      </Button>
      <Button variant="contained" >
        <Link to="/settlement">결산내역 조회</Link>
      </Button>
      <Button variant="contained" >
        <Link to="/inventory">냉장고 재고 현황</Link>
      </Button>
      <Button variant="contained" >
        <Link to="/cookingDB">요리별 DB</Link>
      </Button>
    </>
  );
};

