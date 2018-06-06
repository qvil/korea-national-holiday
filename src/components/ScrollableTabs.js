import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import holidays from "../holidays";
import { todayIsHoliday } from "lib";

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{
        display: "flex",
        justifyContent: "center",
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
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: todayIsHoliday(this.props.today)
    };
  }

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
            {holidays.map(day => <Tab key={day.label} label={day.label} />)}
          </Tabs>
        </AppBar>
        {holidays.map(
          // (day, index) => value === index && day.label
          // value === index && (day.component || <div>{day.label}</div>)
          (day, index) =>
            value === index && (
              <TabContainer key={index}>{day.label}</TabContainer>
            )
        )}
      </div>
    );
  }
}

ScrollableTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabs);
