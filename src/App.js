import React, {useState} from 'react';
import axios from 'axios';

const App = ()=>{
  const baseUrl = 'https://univcert.com/api';

    const [email, setemail] = useState();
    const [team_name, setteam_name] = useState();

    const handleChange_email = (e)=>{
        e.preventDefault();
        setemail(e.target.value);
    }

    const handleChange_team_name = (e)=>{
        e.preventDefault();
        setteam_name(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        await axios
            .post(baseUrl + "/login", {
                email:email,
                team_name:team_name,
            },
            {
                withCredentials: true // 쿠키 cors 통신 설정
              })
            .then(response=>{
                console.log(response);
                console.log(email, team_name);
                if (response.status === 200) {
                    alert("Success");
                } else if (response.status === 400) {
                    alert("Bad Request");
                } else if (response.status === 500) {
                    alert("Server error");
                }
            },
            (error)=>{
                console.log(error); 
                if (error.response.status === 200) {
                    alert("Success");
                } else if (error.response.status === 400) {
                    alert("Bad Request");
                } else if (error.response.status === 500) {
                    alert("Server error");
                }  
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>email<input type="text" required={true} value={email} onChange={handleChange_email}></input></p>
                <p>team_name<input type="text" required={true} value={team_name} onChange={handleChange_team_name}></input></p>
                <button type="submit">제출하기</button>
            </form>
        </div>
    )
}

export default App;