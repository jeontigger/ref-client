import { TotalGNB } from '../GNB/TotalGNB';
import Button from '@mui/material/Button';

export const Header = () => {
  return (
    <>
      <div className='flex'>
        <TotalGNB /> <div>OOO님 안녕하세요!</div><Button variant='contained'>LOG OUT</Button>
      </div>
      {/* <Button variant="contained" style={{"background":"red"}}>test button</Button> */}
    </>
  );
};
