import { useState, useEffect } from "react"
import Context from "./index"
import axios from "axios"

const UsersComponent = (props: { children: any }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;

        setData(persons);
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <>
      <Context.Provider value={data}>
        {props.children}
      </Context.Provider>
    </>
  )
}

export default UsersComponent