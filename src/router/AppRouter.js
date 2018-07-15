import React, { Component } from 'react';
import App from '../components/App';
import HomePage from '../components/HomePage';
import CalculateAmount from '../components/CalculateAmount';
import NotFound from '../components/NotFound';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import green from 'material-ui/colors/green';
import SvgIcon from 'material-ui/SvgIcon';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                        </ol>
                    </nav> */}
                    <div className={this.props.classes.root}>
                        <AppBar position="static" color="default">
                            <Toolbar>
                                <Typography type="title" color="inherit">
                                    <Link to="/"><HomeIcon
                                        className={this.props.classes.icon}
                                        color="primary"
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    /></Link>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
                    <br />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/order/:orderDate" component={App} />
                        <Route path="/calculate-amount" component={CalculateAmount} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const styles = {
    root: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        width: '100%',
    },
    iconHover: {
        '&:hover': {
            fill: green[200],
        },
    },
};

const HomeIcon = props => (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );

// export default AppRouter;
export default withStyles(styles)(AppRouter);