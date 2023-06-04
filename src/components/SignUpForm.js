import { useEffect } from "react";

function SignUpForm() {

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(raw => raw.json())
        .then(result => {
            console.log(result.message);
        })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/', {
            method:"POST",
            body:e.target.value
        }).then(res=>{
            return res.json()
        })
        .then(data=>console.log(data))
    }

    return(
        <div className="signUpContainer">
            <p>sign up form</p>
            <form onSubmit={handleSubmit} method="post">
                <label for="name">name:</label>
                <input id="name" type="text"/><br></br>
                <select>
                    <option>depression</option>
                    <option>autism</option>
                    <option>schizophrenia</option>
                </select>
            </form>
        </div>
    );
}
export default SignUpForm;