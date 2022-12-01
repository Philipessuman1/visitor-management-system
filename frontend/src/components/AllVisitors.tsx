import React from 'react'

const AllVisitors = () => {
  return (
    <div>
           <table className="table background">
        <thead>
            <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Host</th>
            <th scope="col">Log In time</th>
            <th scope="col">Log Out time</th>
            <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            {/* <th scope="row">1</th> */}
            <td>Mark Jacobs</td>
            <td>markjocobs@gmail.com</td>
            <td>Absa Bank</td>
            <td>0203148244</td>
            <td>Philip Essuman</td>
            <td>1:59pm</td>
            <td>2:15pm</td>
            <td>01/12/22</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default AllVisitors
