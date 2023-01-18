import { Component } from "react";

class Button extends Component {
    render() {
        return(
            <button className='btn btn-success form-control' onClick={this.props.onClick}>{this.props.state.setEdit ? "Update" : "Add"}</button>
        )
    }
}

export default Button