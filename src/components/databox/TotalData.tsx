import { SettlementData } from '../../interface/DataInterface';
import data from '../../pages/Settlement/data.json';

export const TotalData = () => {
  return (
    <div className='flex justify-center flex-col w-[60rem] border-t-2 border-black mt-4'>
      {data.data.map((item: SettlementData): any => {
        return (
          <div key={item.id} className='my-1 py-1 flex justify-between '>
            <span className='w-[15rem]'>음식 명 : {item.dish}</span>
            <span className='w-[10rem]'>단가 : {item.price.toLocaleString()}</span>
            <span>판매 갯수</span>
            <span className='w-[6rem]'>소계 :</span>
          </div>
        );
      })}
    </div>
  );
};