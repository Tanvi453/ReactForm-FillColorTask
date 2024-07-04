import { useState } from 'react';

const ReactForm1 = () => {

    const [person, setPerson] = useState({ fname: "", dob: "", age: "", Password: "" });

    const [isEdit, setIsEdit] = useState(-1);

    const [data, setData] = useState(JSON.parse(localStorage.getItem("tanvi")) || []);


    const handleChange = (e) => {
        console.log(e.target.name)
        setPerson({ ...person, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {

        if (isEdit !== -1) {
            const updata = data.map((item, index) => {
                if (isEdit === index) {
                    return person
                }
                else { return item };
            })

            setData(updata);
            localStorage.setItem("tanvi", JSON.stringify(updata));
        }
        else {
            setData([...data, person]);
            localStorage.setItem("tanvi", JSON.stringify([...data, person]));
        }


    }
    console.log(data);
    console.log(person);


    const deleterecord = (idx) => {
        const updated = data.filter((item, index) => { return index !== idx });
        setData(updated);
        console.log(updated);
        localStorage.setItem("tanvi", JSON.stringify(updated));
    }

    const editdata = (idx) => {

        setIsEdit(idx);
        const record = data.find((item, index) => { return index === idx });
        console.log(record);
        setPerson(record);

    }


    // checkbox
    const [leng, setLeng] = useState([]);

    const checkChange = (e) => {
        if (leng.includes(e.target.value)) {
            setLeng(leng.filter((item) => item !== e.target.value));
        }
        else {
            setLeng([...leng, e.target.value]);
        }

    }
    console.log(leng);


    const checkAll = () => {

        if (leng.length === data?.length) {
            setLeng([]);

        } else {
            setLeng(data.map((item) => item.fname));
        }

    }



    return (
        <div>

            <div style={{ backgroundImage: 'url(https://images.rawpixel.com/image_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjY3LW51bm55LTA0Yi5qcGc.jpg)', marginTop: '5%', padding: '10%', backgroundSize: "cover" }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>

                    <div className='tanu'>
                        <label htmlFor="fname" style={{ fontWeight: "bold", fontSize: "20px" }}>Full Name:</label>
                        <input type="text" id="fname" name="fname" value={person.fname} onChange={(e) => handleChange(e)} style={{ height: "25px", width: "400px", borderRadius: "5px" }} />
                    </div>

                    <div className='tanu'>
                        <label htmlFor="dob" style={{ fontWeight: "bold", fontSize: "20px" }}>Date Of Birth:</label>
                        <input type="date" id='dob' name="dob" value={person.dob} onChange={(e) => handleChange(e)} style={{ height: "25px", width: "400px", borderRadius: "5px" }} />
                    </div>

                    <div className='tanu'>
                        <label htmlFor="age" style={{ fontWeight: "bold", fontSize: "20px" }}>Age:</label>
                        <input type="number" id='age' name="age" value={person.age} onChange={(e) => handleChange(e)} style={{ height: "25px", width: "400px", borderRadius: "5px" }} />
                    </div>



                    <div className='tanu'>
                        <label htmlFor="Password" style={{ fontWeight: "bold", fontSize: "20px" }}>Password:</label>
                        <input type="password" id="Password" name="Password" value={person.Password} onChange={(e) => handleChange(e)} style={{ height: "25px", width: "400px", borderRadius: "5px" }} />
                    </div>

                    <button type='submit' onClick={handleSubmit} style={{ fontWeight: "bold", fontSize: "20px", height: "40px", width: "150px", marginTop: "30px", borderRadius: "10px", boxShadow: "-5px -5px 5px #796960 inset" }}>Submit</button>

                </div>
                

            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>

                <table>

                    <thead>
                        <th>Full Name:</th>
                        <th>Date Of Birth:</th>
                        <th>Age:</th>
                        <th>Password:</th>
                        <th>Checkbox:<input type="checkbox" value="all" checked={leng.length === data?.length} onChange={(e) => checkAll(e)} /></th>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.fname}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.age}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.checkbox}<input type="checkbox" value={item.fname} checked={leng.includes(item.fname)} onChange={(e) => checkChange(e)} /></td>
                                    <td><button type="delete" onClick={() => deleterecord(index)}>Delete</button></td>
                                    <td><button type="edit" onClick={() => editdata(index)}>Edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default ReactForm1;

