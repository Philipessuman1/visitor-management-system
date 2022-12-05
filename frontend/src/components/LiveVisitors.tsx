import React from 'react'

const LiveVisitors = () => {
  return (
    <div>
        <table className="table w-75 m-auto background mt-3">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Host</th>
            <th scope="col">Log In time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark Jacobs</td>
            <td>markjocobs@gmail.com</td>
            <td>Absa Bank</td>
            <td>0203148244</td>
            <td>Philip</td>
            <td>1:59pm</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default LiveVisitors
