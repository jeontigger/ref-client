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

    return(
        <>
        
        <form >
      <input type= "text" ref = {ref} defaultValue = {'name'}/><button type="submit">중복확인</button><br/>
      <input type= "text" defaultValue = "비밀번호" /><br/>
      <input type= "text" defaultValue = "비밀번호 확인" /><br/>
      <input type= "text" defaultValue = "성명" /><br/>
      <input type= "text" defaultValue = "생년월일" /><br/>
      <input type= "text" defaultValue = "닉네임" /><br/>
      <input type= "text" defaultValue = "이메일" /><br/>
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