


const App = () => { 

  const object = [ 'hafsat', 'latifa', 'ummi' ]
  console.log(object)

  let users = []

let result = []
  
const getRandomName = async() => {
  const response = await fetch('https://randomuser.me/api')
const data = await response.json()

for(let i=0;i<data.results.length;i++) {
  users.push(data.result[i])

  console.log(data.results[i])
}
 return data.results
}

getRandomName()

// console.log(getRandomName())

console.log(users)

  return (
    <>
   {/* <h1>{result}</h1> */}
   {/* <h1>{data.results} </h1> */}
   {users.map((user) => (
    <h3 key={user.gender}>{user.gender}</h3>
  ))}
   </>
  )
}

export default App