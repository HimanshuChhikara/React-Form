import { Component } from "react";

class Form extends Component {
    render() {
        let {state,onChangeHandler} = this.props;
        return(
            <form>
          <label>Name</label>
          <input type="text" className='form-control' name="setName" value={state.setName} onChange={onChangeHandler} placeholder="Enter your Name" />
          <label>Age</label>
          <input type="number" className='form-control' name="setAge" pattern="^[0-9\b]+$" value={state.setAge} onChange={onChangeHandler} placeholder="Enter your Age"/>
          <label>Phone</label>
          <input type="number" className='form-control' pattern="^[0-9\b]+$" name="setPhone" value={state.setPhone} onChange={onChangeHandler} placeholder="Enter your Phone"/>
          <label>Email</label>
          <input type="email" className='form-control' name="setEmail" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;" value={state.setEmail} onChange={onChangeHandler} placeholder="Enter your Email"/>
          {/* <input type="email" className='form-control' name="setEmail" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" value={state.setEmail} onChange={onChangeHandler} /> */}
        </form>
        )
    }
}

export default Form;