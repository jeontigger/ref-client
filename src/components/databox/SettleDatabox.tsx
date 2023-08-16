import { useEffect, useState } from 'react';
import { SettlementData } from '../../interface/DataInterface';
import data from '../../pages/Settlement/data.json';

export const SettleDatabox = () => {
  const [itemCounts, setItemCounts] = useState<Record<string, number>>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleCountChange = (itemId: number, count: any) => {
    setItemCounts((prevCounts) => {
      return { ...prevCounts, [itemId]: count };
    });
  };

  useEffect(()=>{
    let sum = 0;
    for (let itemId in itemCounts) {
      sum += (itemCounts[itemId]||0) * (data.data.find((item) => item.id === parseInt(itemId))?.price||0);
    }
    setTotalPrice(sum);
  }, [itemCounts]);

  return (
    <div className='flex justify-center flex-col w-[60rem]'>
      <div className='flex justify-end font-bold mr-1 border-b-2 border-black'>합계 : {totalPrice.toLocaleString()}</div>
      {data.data.map((item: SettlementData): any => {
        return (
          <div key={item.id} className='my-1 py-1 flex justify-between '>
            <span className='w-[15rem]'>음식 명 : {item.dish}</span>
            <span className='w-[10rem]'>단가 : {item.price.toLocaleString()}</span>
            <input
              type='number'
              min='0'
              max='9999'
              placeholder='판매 갯수'
              className=' border-b-2 border-black w-24'
              onChange={(e) => handleCountChange(item.id, e.target.value)}
            ></input>
            <span className='w-[6rem]'>소계 : {((itemCounts[item.id] ?? 0) * item.price).toLocaleString()}</span>
          </div>
        );
      })}
    </div>
  );
};