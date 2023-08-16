import { useEffect, useState } from 'react';
import { TotalGNB } from '../GNB/TotalGNB';
import Button from '@mui/material/Button';

export const Header = () => {
  const [isLogin,setIsLogin]=useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  }
  useEffect(()=>{

  },[isLogin])

  return (
    <>
      <div className="flex justify-between mt-8">
        <TotalGNB />
        <div className='flex mr-4'>
          <div className=' pr-4 content-center'>{isLogin?'OOO님 안녕하세요!':''}</div>
          <Button variant="contained" onClick={handleLogin}>{isLogin?'LOG OUT':'LOG IN'}</Button>
        </div>
      </div>
      {/* <Button variant="contained" style={{"background":"red"}}>test button</Button> */}
    </>
  );
};
