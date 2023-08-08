import {useRef} from 'react';
import {DropDownCalendar} from '../calendar/DropDownCalendar'

export const SignUpBox = () => {
    // const [name, setFirstName] = useState('이름');

    
    const idRef = useRef<HTMLInputElement>(null);
    const IDDuplicateCheck = (e:any) => {
      console.log(idRef.current?.value);
      e.preventDefault();
    }
    const submitClick = (e:any) => {
        e.preventDefault();
    }


    const cancelClick = (e:any) =>{
      window.location.href = "/";

      e.preventDefault();
    }
    
    
    const pwRef = useRef<HTMLInputElement>(null);
    const pwCompareRef = useRef<HTMLInputElement>(null);
    const CompareTextRef = useRef<HTMLSpanElement>(null);
    const PWC = () => {
        if(pwRef.current?.value === pwCompareRef.current?.value){
            if (CompareTextRef.current) {
                CompareTextRef.current.textContent = '비밀번호가 일치합니다!';
              }
        }else{
            if (CompareTextRef.current) {
                CompareTextRef.current.textContent = '비밀번호가 일치하지 않습니다!';
              }
        }
    }

    return(
        <>
        
        <form >
      <input type= "text" ref = {idRef} placeholder = "아이디" /><button type="submit" onClick={IDDuplicateCheck}>중복확인</button><br/>
      <input type= "password" ref = {pwRef} placeholder = "비밀번호" onChange={PWC} /><br/>
      <input type= "password" ref = {pwCompareRef} placeholder = "비밀번호 확인" onChange={PWC} /><br/>
      <span ref = {CompareTextRef}>비밀번호를 입력해주세요</span><br/>
      
      <input type= "text" placeholder = "성명" /><br/>
      <DropDownCalendar/><br/>
      <input type= "text" placeholder = "닉네임" /><br/>
      <input type= "text" placeholder = "이메일" /><br/>
      <button type="submit" onClick = {cancelClick}>
        취소
      </button>
      <button type="submit" onClick = {submitClick}>
        등록
      </button>
      
    </form>
        
        </>
    )
}