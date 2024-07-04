import { useState } from 'react';

const BoxColor = () => {

    const [individual, setIndividual] = useState({ Id: "", Name: "", post: "", color: "" });

    const [Data, setData] = useState(JSON.parse(localStorage.getItem("shivam")) || []);

    const handleChange = (e) => {
        console.log(e.target.name)
        setIndividual({ ...individual, [e.target.name]: e.target.value })
    }
    console.log(individual);



    const handleSubmit = () => {
        setData([...Data, individual]);
        localStorage.setItem("shivam", JSON.stringify([...Data, individual]));
    }
    console.log(Data);


    return (
        <div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5%", gap: "30px" }}>

                <div>
                    <label htmlFor="Id">ID:-</label>
                    <input type="id" id="Id" name="Id" value={individual.Id} onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="Name">Name:-</label>
                    <input type="text" id="Name" name="Name" value={individual.Name} onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="post">Post:-</label>
                    <input type="post" id="post" name="post" value={individual.post} onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="color">Color:-</label>
                    <input type="color" id="color" name="color" onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <button type="submit" onClick={handleSubmit} style={{ marginTop: "20px" }}>Submit</button>
                </div>


            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "5%" }}>

                {Data.map((item) => {

                    return (

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                            <div style={{ border: "2px black solid", height: "100px", width: "100px", backgroundColor: item.color }}></div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <div>{item.Id}</div>
                                <div>{item.Name}</div>
                                <div>{item.post}</div>
                                <div>{item.color}</div>
                            </div>

                        </div>

                    )

                })}

            </div>


        </div >
    )
}

export default BoxColor;

