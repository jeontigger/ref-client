import { TotalGNB } from '../GNB/TotalGNB';
import Button from '@mui/material/Button';

export const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-8">
        <TotalGNB />{' '}
        <div className='flex mr-4'>
          <div className=' pr-4 content-center'>OOO님 안녕하세요!</div>
          <Button variant="contained">LOG OUT</Button>
        </div>
      </div>
      {/* <Button variant="contained" style={{"background":"red"}}>test button</Button> */}
    </>
  );
};
