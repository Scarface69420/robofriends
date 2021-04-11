import React from "react";
// import axios from "../axios";
import { robots } from "../robots";

const initialState = {
  id: "",
  name: "",
  email: "",
};

class AddName extends React.Component {
  state = initialState;

  onUsernameChange = (event) => {
    this.setState({ id: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onSubmitAdd = () => {
    // console.log(this.state);
    // axios
    //   .post("/users.json", this.state)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    robots.push(this.state);
    this.props.onRouteChange("home");
    document.getElementById("username").value = "";
  };

  render() {
    return (
      <article className='br3 tc ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure w-100'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Add Name to Database</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='username'>
                  Username
                </label>
                <input
                  onChange={this.onUsernameChange}
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='text'
                  name='username'
                  id='username'
                  required
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='name'>
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='text'
                  name='name'
                  id='name'
                  required
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='email'>
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  required
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='ADD'
                onClick={this.onSubmitAdd}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default AddName;
