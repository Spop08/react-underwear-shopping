import React, {Component} from 'react';
import Footer from '../Footer'
import BHeader from '../BHeader'
import Button from '@material-ui/core/Button';
import {portfolioService} from '../../_services';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from '@material-ui/icons/Person';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = {
  avatar: {
    backgroundColor: '#e9dff8',
    color: '#656f7c9c'
  },
  listitem: {
    marginBottom: '20px'
  },
  dialogCustomizedWidth: {
    'max-width': '450px'
  }
};

class EditFriendsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      open: false
    }
    this.handleDelete = this
      .handleDelete
      .bind(this);
    this.handleAgree = this
      .handleAgree
      .bind(this)
    this.handleClose = this
      .handleClose
      .bind(this)
  }

  componentDidMount() {
    portfolioService
      .getFriends()
      .then(response => {
        this.setState({emails: response.data})
      })
  }
  handleDelete(email) {
    console.log("FORM", email);
    this.setState({open: true, selectedemail: email})
  }
  handleClose() {
    this.setState({open: false})
  }
  handleAgree() {
	this.setState({open: false})
	const emails = [...this.state.emails]
	portfolioService.deleteFriend({email:this.state.selectedemail}).then(response => {
		if(response.status === 200)
			this.setState({emails: emails.filter(item => item != this.state.selectedemail)})
	})
	
  }
  render() {
    const {emails} = this.state;
    const classes = this.props.classes;
    return (
      <div>
        <div className="Bigcontainer">
          <BHeader></BHeader>
          <div className="row" style={{
            marginTop: '50px'
          }}>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h2
                style={{
                marginBottom: '60px',
                display: 'flex',
                justifyContent: 'center'
              }}>Friends</h2>
              <List>
                {emails.map(email => (
                  <ListItem key={email} className={classes.listitem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <PersonIcon/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={email}/>
                    <IconButton aria-label="Delete" onClick={() => this.handleDelete(email)}>
                      <DeleteIcon/>
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                classes={{
                paperFullWidth: classes.dialogCustomizedWidth
              }}>
                <DialogTitle id="alert-dialog-title">{"Do you want to remove this Friend?"}</DialogTitle>
                <DialogActions>
                  <Button onClick={this.handleAgree} color="primary" autoFocus>
                    Agree
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Disagree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )

  }
}

export default withStyles(useStyles)(EditFriendsPage)