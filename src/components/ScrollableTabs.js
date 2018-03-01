import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import {
  SamilMovement,
} from 'components';

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 8 * 3
      }}
      // align="center"
    >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="삼일절" />
            <Tab label="제헌절" />
            <Tab label="광복절" />
            <Tab label="개천절" />
            <Tab label="한글날" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><SamilMovement /></TabContainer>}
        {value === 1 && <TabContainer>제헌절</TabContainer>}
        {value === 2 && <TabContainer>광복절</TabContainer>}
        {value === 3 && <TabContainer>개천절</TabContainer>}
        {value === 4 && <TabContainer>한글날</TabContainer>}
      </div>
    );
  }
}

ScrollableTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabs);
