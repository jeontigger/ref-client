import Button from '@mui/material/Button';
import { Databox } from '../../components/databox/Databox';
import { Header } from '../../components/header/Header';

export const Calculate = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-evenly mt-28">
        <div className="flex absolute w-52 justify-between top-[8rem] right-[11rem]">
          <div>날짜 기입란</div>
          <Button variant="contained">정산</Button>
        </div>
        <Databox />
      </div>
    </div>
  );
};
