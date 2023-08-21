import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { DayCount } from '../../components/databox/DayCount';
import { TotalData } from '../../components/databox/TotalData';

export const TotalReview = () => {
  const [selectedDate, setSelectedDate] = useState(DayCount());
  const [text, setText] = useState('일일');

  const handleText = (e: any) => {
    const id = e.currentTarget.id;
    setText(id);
  };
  useEffect(() => {
    console.log(text);
  }, [text]);
  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className=" min-h-[40rem] w-[60rem] justify-center">
        <div className="flex justify-between pt-12 p-2 border-double border-b-[8px] border-black">
          <div>
            <Button variant="contained" id="일일" sx={{ mx: 2 }} onClick={handleText}>
              일일
            </Button>
            <Button variant="contained" id="월간" sx={{ mx: 2 }} onClick={handleText}>
              월간
            </Button>
            <Button variant="contained" id="연간" sx={{ mx: 2 }} onClick={handleText}>
              연간
            </Button>
            <Button variant="contained" id="총계" sx={{ mx: 2 }} onClick={handleText}>
              총계
            </Button>
          </div>
          <input type="date" value={selectedDate} onChange={handleDateChange}></input>
        </div>
        <div className="flex justify-around pt-[1rem] pb-4">
          <div className="flex w-[10rem] justify-around">
            <div>{text==='총계'?'총':text} 원가 :</div>
            <div>val</div>
          </div>
          <div className="flex w-[10rem] justify-around">
            <div>{text==='총계'?'총':text} 수익 :</div>
            <div>val</div>
          </div>
        </div>
        {text!=='일일'?<div>
          <div className="flex my-1 py-1 justify-around border-double border-4 border-red-600">
            <div className="w-[10rem]">BEST MENU!!</div>
            <div className="w-[10rem]">메뉴 이름</div>
            <div className="w-[10rem]">판매 수량 :</div>
          </div>
          <div className="flex my-1 py-1 justify-around border-double border-4 border-black">
            <div className="w-[10rem]">WORST MENU..</div>
            <div className="w-[10rem]">메뉴 이름</div>
            <div className="w-[10rem]">판매 수량 :</div>
          </div>
        </div>:null}
        {/* <div>
          <div className="flex my-1 py-1 justify-around border-double border-4 border-red-600">
            <div className="w-[10rem]">BEST MENU!!</div>
            <div className="w-[10rem]">메뉴 이름</div>
            <div className="w-[10rem]">판매 수량 :</div>
          </div>
          <div className="flex my-1 py-1 justify-around border-double border-4 border-black">
            <div className="w-[10rem]">WORST MENU..</div>
            <div className="w-[10rem]">메뉴 이름</div>
            <div className="w-[10rem]">판매 수량 :</div>
          </div>
        </div> */}
        <TotalData />
      </div>
    </div>
  );
};
