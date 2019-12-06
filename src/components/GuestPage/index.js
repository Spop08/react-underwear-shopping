import React, {Component} from 'react';
import Footer from '../Footer'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {portfolioService} from '../../_services';
import SHeader from '../Header/SHeader'
import {withRouter} from 'react-router';
class GuestPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myEmail: '',
      brideEmail: ''
    }
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.emailChange1 = this
      .emailChange1
      .bind(this);
    this.emailChange2 = this
      .emailChange2
      .bind(this);
  }

  componentDidMount() {}

  emailChange1(event) {
    this.setState({myEmail: event.target.value});
  }

  emailChange2(event) {
    this.setState({brideEmail: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    portfolioService
      .getBride({myEmail: this.state.myEmail, brideEmail: this.state.brideEmail})
      .then((response) => {
        if(response.status === 202)
        {
            this.setState({error:response.data.status});
        }
        if(response.status === 200)
        {
            const json = JSON.parse(response.data);
            const account = json[0].fields;
            this.props.history.push({
                pathname:'/guest_feed',
                state: {account:account}});
        }
      });
  }
  render() {
    return (
      <div className="guest-container">
        <SHeader/>
        <div className="Bigcontainer">
          <div className="row" style={{
            marginTop: '100px'
          }}>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form onSubmit={e => this.handleSubmit(e)}>
                <FormControl style={{
                  display: 'flex'
                }}>
                  <InputLabel htmlFor="email">Your Email address</InputLabel>
                  <Input
                    
                    className="inputEmail"
                    id="email"
                    aria-describedby="my-helper-text"
                    type="email"
                    onChange={this.emailChange1}/>
                </FormControl>
                <FormControl
                  style={{
                  marginTop: '30px',
                  display: 'flex'
                }}>
                  <InputLabel htmlFor="email1">Bride Email address</InputLabel>
                  <Input
                    
                    className="inputEmail"
                    id="email1"
                    aria-describedby="my-helper-text"
                    type="email"
                    onChange={this.emailChange2}/>
                </FormControl>
                {this.state.error && <p style={{color:'#f00'}}>{this.state.error}</p>}
                <Button className='pinkButton' type="submit" style={{marginBottom:'40px'}}>Find
                </Button>
              </form>
            </div>
            <div className="col-md-4"></div>
            
          </div>
        </div>
        <Footer></Footer>
      </div>
    )

  }
}

export default withRouter(GuestPage);
