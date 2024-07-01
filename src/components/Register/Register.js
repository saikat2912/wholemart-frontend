import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PWD_REGEX,USER_REGEX } from "../../utilities/utility";
import './style.css'


const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [firstName,setFirstName] = useState('');
    const [firstNameFocus,setFirstNameFocus] = useState('');

    const [lastName,setLastName] = useState('');
    const [lastNameFocus,setLastNameFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);
    const [emailFocus,setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);


    const [phoneNo,setPhoneno] = useState('')
    const [phonenofocus,setaPhonenofocus]= useState(false);

    const [gender,setGender] =useState('');
    const [dob,setDob]= useState(Date.now);
    const [city,setCity]= useState('');
    const [state,setState] = useState('');
    const [country,setCountry] = useState('');
    const [pincode,setPincode] = useState('');


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(USER_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
       
        setValidEmail(true);
    }, [email, validEmail])

    useEffect(() => {
        setErrMsg('');
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
     
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section >
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <h1>Register</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="wrapper">
                        <div className="firstname form-elements">
                        <label htmlFor="firstname">First Name:</label>
                        <input 
                            type="text"
                            id="firstname"
                            autoComplete="off"
                            onChange={(e)=>setFirstName(e.target.value)}
                            value={firstName}
                            required
                            onFocus={()=>setFirstNameFocus(true)}
                            onBlur={()=>setFirstNameFocus(false)}
                            />
                        </div>
                        <div className="lastname form-elements">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text"
                            id="lastName"
                            autoComplete="off"
                            onChange={(e)=>setLastName(e.target.value)}
                            value={lastName}
                            required
                            onFocus={()=>setLastNameFocus(true)}
                            onBlur={()=>setLastNameFocus(false)}
                            />
                        </div>

                       <div className="email form-elements">
                        <label htmlFor="email">
                            Email:
                            {/* <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        </div>
                    
                        <div className="password form-elements">
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        </div>

                        <div className="confirmpwd form-elements">
                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        </div>
                        <div className="phoneno form-elements">
                        <label htmlFor="phoneno">Phone number:</label>
                        <input 
                            type="text"
                            id="phoneno"
                            autoComplete="off"
                            onChange={(e)=>setPhoneno(e.target.value)}
                            value={phoneNo}
                            required
                            onFocus={()=>setaPhonenofocus(true)}
                            onBlur={()=>setaPhonenofocus(false)}
                            />
                        </div>
                        <div className="dob form-elements">
                            <label htmlFor="dob">Date of birth:</label>
                        <input 
                            type="date"
                            id="dob"
                            autoComplete="off"
                            onChange={(e)=>setDob(e.target.value)}
                            value={dob}
                            required
                           
                            />
                            </div>
                            <div className="state form-elements">
                            <label htmlFor="state">State:</label>
                        <input 
                            type="text"
                            id="state"
                            autoComplete="off"
                            onChange={(e)=>setState(e.target.value)}
                            value={state}
                            required
                         
                            />
                            </div>
                            <div className="country form-elements">
                            <label htmlFor="country">Country:</label>
                        <input 
                            type="text"
                            id="country"
                            autoComplete="off"
                            onChange={(e)=>setCountry(e.target.value)}
                            value={country}
                            required
                           
                            />
                            </div>
                            <div className="pincode form-elements">
                            <label htmlFor="pincode">Pincode:</label>
                        <input 
                            type="text"
                            id="pincode"
                            autoComplete="off"
                            onChange={(e)=>setPincode(e.target.value)}
                            value={pincode}
                            required
                          
                            />
                            </div>
                     

                        </div>
                        <button disabled={!validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register