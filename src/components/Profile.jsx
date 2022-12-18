import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')
  const [profile, setProfile] = useState([{
    name:'',
    age:'',
    email:''
  }])

  const addProfile = (event) => {
    event.preventDefault()
      setProfile([...profile, {name, age, email}])
  }
  console.log(profile);
  return (
    <div className="App">
      <div className="card" style={{width:'100%'}}>
        <div className="card-body">
          <h1 className="card-title">Profiles</h1>
          <form  onSubmit={addProfile}>
          <div className="input-group input-group-sm mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" name='name' value={profile.name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <label htmlFor="age">Age:</label>
            <input type="text" className="form-control" name='age' value={profile.age} onChange={(e) =>setAge(e.target.value)}/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control" name='email' value={profile.email} onChange={(e) =>setEmail(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-success">Success</button>
          </form>       

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
             {profile.map((data, index) =>{
              return(
             
               <tr>
                  <th scope="row">{index +1}</th>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.email}</td>
              </tr>
              )
             })}
            
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default App;
