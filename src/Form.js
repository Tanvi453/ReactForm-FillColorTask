import { useState } from "react";

const ReactForm = () => {
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");

    console.log(uname);
    console.log(email);
    console.log(gender);
    console.log(password);

    return (
        <>
            <h1>Form</h1>
            
            <div>
                <label htmlFor="uname">Username:</label>
                <input type="text" id="uname" name="uname" value={uname} onChange={(e) => setUname(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="gender">Gender:</label>
                <input type="radio" name="gender" id="male" value="Male" onChange={(e) => setGender(e.target.value)} />Male
                <input type="radio" name="gender" id="female" value="female" onChange={(e) => setGender(e.target.value)} />female
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={email} onChange={(e) => setPassword(e.target.value)} />
            </div>

        </>
    )
}

export default ReactForm;