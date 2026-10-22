import { useState, useCallback, useRef, useEffect } from "react"







export function PasswordGeneratorApp(){

    const [length, setLength]=useState(10);

    const [numAllow,setNumAllow]= useState(false);

    const [charAllow,setCharAllow]=useState(false);
    const [password,setPassword]=useState("");

    
    const passwordGenerator= useCallback(()=>{
        let pass= "";
        let strData="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numAllow) strData += "0123456789"
        if(charAllow) strData += "!£$%^&*()~#@:;|"

        for (let index = 0; index < length; index++) {
            let char= Math.floor(Math.random()*strData.length+1);
            pass+=strData.charAt(char);
            setPassword(pass);
            
        }

    }, [length,numAllow,charAllow,setPassword])

const passwordasRef= useRef(null);
 const copyFunction= useCallback(()=>{
    passwordasRef.current?.select();
    // inUmOMmQN.current?.setSelectionRange(0,6);
    window.navigator.clipboard.writeText(password);
 },[password])  
 
 
useEffect(()=>{passwordGenerator();},[length,numAllow,charAllow,passwordGenerator]);


return <>

<div id="passwordApp">
    <h1 >Password Generator App</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input className="outline-none w-full py=1 px-3" type="text" value={password} classname="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordasRef}/>
    <button className="outline-none bg-slate-500 text-white px-4 py-1 shrink-0"
            onClick={copyFunction}>Copy</button>
    </div>
    
    <div classname="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
            <input type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
            <input type="checkbox"
                    defaultChecked={numAllow}
                    id="numberInput"
                    onChange={()=>{setNumAllow((previous)=>!previous)}}
                    />
                    <label htmlFor="numberInput">Numbers</label>

        </div>

<div className="flex items-center gap-x-1">
            <input type="checkbox"
                    defaultChecked={charAllow}
                    id="charInput"
                    onChange={()=>{setCharAllow((previous)=>!previous)}}
                    />
                    <label htmlFor="charInput">Characters</label>

        </div>

    </div>

</div>



</>

}
