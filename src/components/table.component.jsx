import { Component } from "react";

class TableComponent extends Component {
    render() {
        return (
            <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.user.map((u, index) => {
                  return (
                    <tr key={index}>
                      <td>{u.name}</td>
                      <td>{u.age}</td>
                      <td>{u.phone}</td>
                      <td>{u.email}</td>
                      <td><button className="btn btn-info" onClick={() => this.props.onEditClick(index)}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={() => this.props.onDeleteClick(index)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
    }
}

export default TableComponent;