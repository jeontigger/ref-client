import data from '../../pages/Calculate/data.json';
import { CalculateData } from '../../interface/DataInterface';

export const Databox = () => {
  return (
    <div className='flex justify-center flex-col w-9/12 ml-52'>
      {data.data.map((item: CalculateData): any => {
        return (
          <div key={item.id} className='my-1 py-1 flex justify-between border-2 border-red-700'>
            <span className='w-[15rem]'>음식 명 : {item.dish}</span>
            <span className='w-[10rem]'>단가 : {item.price}</span>
            <input type='number' min='0' max='9999' placeholder='판매 갯수' className=' border-b-2 border-black w-24'></input>
          </div>
        );
      })}
    </div>
  );
};
