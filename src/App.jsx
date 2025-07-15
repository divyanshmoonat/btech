import './App.css'

const App = () => {
  const userName = "ABCDEFGH";
  const age = 50;
  const users = [
    "John",
    "Alex",
    "Peter",
    "Tony",
    "X",
    "Y",
    "Z"
  ];
  const userDetails = {
    name: "John",
    age: 50,
    address: "123, ABC Colony, Delhi",
    mobNo: "123123131"
  }

  return (
    <div>
      <h1>This is demo project</h1>
      <p>Lorem  ipsum dor sit amet Lorem ipsum dor sit amet Lorem ipsum dor sit amet Lorem ipsum dor sit amet Lorem ipsum dor sit amet</p>
      User name is <b>{userName}</b> and the age is <h4>{age}</h4>
      <ul>
        {/* {
          users.map((user) => {
            return <li> {user} </li>
          })
        } */}
        {
          users
          // .sort((a,b) => a-b)
          // .filter((user) => user.length > 2)
          .map((user, index) => <li key={index}>{user}</li>)
        }
      </ul>
        <h4>Name {userDetails.name}</h4>
        <h4>Age {userDetails.age}</h4>
        <h4>Address {userDetails.address}</h4>
        <h4>Mob no {userDetails.mobNo}</h4>
    </div>
  )
}

export default App;
