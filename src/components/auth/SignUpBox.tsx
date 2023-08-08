import {useRef} from 'react';

export const SignUpBox = () => {
    // const [name, setFirstName] = useState('이름');

    
    const ref = useRef<HTMLInputElement>(null);
    const handleClick = (e:any) => {
        e.preventDefault();
        if(ref.current){
            console.log(ref.current.value);
        }
        console.log('handleclick');
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
      <input type= "text" ref = {ref} placeholder = "이름" /><button type="submit">중복확인</button><br/>
      <input type= "password" ref = {pwRef} placeholder = "password"  /><br/>
      <input type= "password" ref = {pwCompareRef} placeholder = "password" onChange={PWC} /><br/>
      <span ref = {CompareTextRef}>비밀번호를 입력해주세요</span><br/>
      
      <input type= "text" placeholder = "성명" /><br/>
      <input type= "text" placeholder = "생년월일" /><br/>
      <input type= "text" placeholder = "닉네임" /><br/>
      <input type= "text" placeholder = "이메일" /><br/>
      <button type="submit">
        취소
      </button>
      <button type="submit" onClick = {handleClick}>
        등록
      </button>
      
    </form>
        
        </>
    )
}