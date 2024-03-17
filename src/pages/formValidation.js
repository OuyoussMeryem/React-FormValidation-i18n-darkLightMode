import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState  } from 'react';
import { useTranslation } from 'react-i18next';
export default function FormValidation(){
const {t}=useTranslation();
const inputName=useRef();
const inputEmail=useRef();
const inputMessage=useRef();
const inputAccept=useRef();

const[erreurs,setErreurs]=useState({});
const [isDisable,setIsDisable]=useState(true)
const getErreur=(feildName)=>{
    return erreurs[feildName]
}

const existErreur=(feildName)=>{
  return getErreur(feildName) !== undefined;
}
const displayError=(feildName)=>{
    const feild=document.querySelector(`#${feildName}`);
    if(existErreur(feildName)){
            feild.style.border='red 1px solid';
            return <small className="text-danger">{getErreur(feildName)}</small>
         }
         if(feild != null){
            // soit je faix != undefined soit null les deux fonctionne tres tres bien 
            feild.removeAttribute('style');
         }
        }


const displayErrors=()=>{
  return Object.entries(erreurs).map((erreur,key)=>{
    const [feild,message]=erreur;
    return <li key={key}>{feild}:{message}</li>
  })
   
}

    


const ValidationForm=()=>{
    setErreurs([])
    const nom=inputName.current.value;
    const email=inputEmail.current.value;
    const message=inputMessage.current.value;
    const accept=inputAccept.current.checked;
    if(nom.trim()===""){
        setErreurs(prevState=>{return {...prevState,...{name:t("error_nom")}}});
        setIsDisable(false);
    }
    if(email.trim()===''){
        setErreurs(prevState=>{return {...prevState,...{email:t("error_email_one")}}});
        
        setIsDisable(false);
        
    }else if(!email.match(/^\S+@\S+\.\S+$/ )){
        setErreurs(prevState=>{return {...prevState,...{email:t("error_email_two")}}})
         
        setIsDisable(false);   
        
    }
    if(message.trim()===''){
        setErreurs(prevState=>{return{...prevState,...{message:t("error_message_one")}}})
        setIsDisable(false);
    }else if(message.length < 200){
        setErreurs(prevState=>{return {...prevState,...{message:t("error_message_two")}}})
        setIsDisable(false); 
    }
    if(!accept){
            setErreurs(prevState=>{return {...prevState,...{CheckBox:t("checkBox_error")}}})
            setIsDisable(false);
        }
    
    else{
        setIsDisable(true)
    }
    
   
}

const handleChange=()=>{
    ValidationForm();
}


const viderChamp=()=>{
    inputName.current.value="";
    inputEmail.current.value="";
    inputMessage.current.value="";
    inputAccept.current.checked=false;

}
const submitForm=(e)=>{
    e.preventDefault();
    
    
    ValidationForm();
    viderChamp();
}

  

    return <>
    <div className="container  w-50" >
        {Object.keys(erreurs).length > 0?<div className="alert alert-danger" role="alert">
            <strong>{t("error")}</strong><br/>  
            <ul>
                {displayErrors()}
            </ul>
            </div>:<div className="alert alert-success" role="alert">
                <strong>{t("success")}</strong> {t("right_message")}
                </div>}
        <h1>{t("title")}</h1>
        <hr />
        <form onSubmit={submitForm}>
            <div className="form-group">
            <label htmlFor='nom'>{t("name")} </label>
            <input type="text" id="name" className='form-control' ref={inputName} onChange={handleChange}/>
            {displayError('name')}
            </div>

            <div className="form-group">
            <label htmlFor='email' >{t("email")}</label>
            <input type="text" id="email"  className='form-control' ref={inputEmail} onChange={handleChange}/>
            {displayError('email')}
            </div>

            <div className="form-group">
            <label htmlFor='message' >{t("message")}</label>
            <textarea id="message" cols="30" rows="6" className='form-control' ref={inputMessage} onChange={handleChange}></textarea>
            {displayError('message')}
            </div>

            <div className="form-check">
            <input type="checkbox" id="CheckBox" className='form-check-input' ref={inputAccept} onChange={handleChange} />
            <label htmlFor='accept' >{t("checkBox")}</label><br />
            {displayError('CheckBox')}
            </div>
            <button disabled={!isDisable}  className="button form-control" >{t("button")}</button>
          
        </form>



    </div>
    
    
    
    </>
}