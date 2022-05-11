import React, { useContext } from 'react';
import Context from '../context/index'

const Home = () => {
  const data = useContext(Context)
  console.log(data);

  return (
    <>
      <h1>Home</h1>
      {/* {(data: any) => {
        if (!(data.length > 0)) {
          return (<h3>not found data !</h3>)
        } else {
          return (
            data.map((item: any, index: number) => (
              <table width="100%" cellSpacing="0" cellPadding="0">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                  </tr>
                </tbody>
              </table>
            )
            )
          )
        }
      }} */}
    </>
  );
};

export default Home;