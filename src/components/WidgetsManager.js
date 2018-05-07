import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import { toggleWidgetDisplay } from '../store/actions/widgetManage';
class WidgetManager extends React.Component {
  constructor(props) {
    super(props);
  }
	/*======== handle toggle on list item
    @params: String
    example: 'weather'
    @return: send async dispatch event to update event
  */
	handleToggle = widget => {
	  const { displayWidgets } = this.props;
	  const isShown = displayWidgets[widget].displayed;
	  this.props.dispatch(toggleWidgetDisplay(widget, !isShown));
	};

	handleConfirm = widget => {
	  console.log(this.state);
	};

	render() {
	  console.log('display: ', this.propsdisplayWidgets);
	  return (
	    <div style={styles.root}>
	      <List>
	        <Subheader>General Setting</Subheader>
	        <ListItem
	          primaryText="Edit event"
	          secondaryText="Change title, date or location of the event"
	        />
	        <ListItem primaryText="Delete event" secondaryText="You want to remove my existence?" />
	      </List>
	      <Divider />
	      <List>
	        <Subheader>Widget Manager</Subheader>
	        <ListItem
	          primaryText="Weather"
	          rightToggle={
	            <Toggle
	              toggled={this.props.displayWidgets.weather.displayed}
	              onToggle={() => this.handleToggle('weather')}
	            />
	          }
	        />
	        <ListItem
	          primaryText="Checklist"
	          rightToggle={
	            <Toggle
	              toggled={this.props.displayWidgets.todo.displayed}
	              onToggle={() => this.handleToggle('todo')}
	            />
	          }
	        />
	        <ListItem
	          primaryText="Map"
	          rightToggle={
	            <Toggle
	              toggled={this.props.displayWidgets.map.displayed}
	              onToggle={() => this.handleToggle('map')}
	            />
	          }
	        />
	        <MenuItem
	          primaryText="Confirm"
	          style={{ textAlign: 'center', backgroundColor: 'green', color: 'white' }}
	          onClick={this.handleConfirm}
	        />
	      </List>
	    </div>
	  );
	}
}

const mapStateToProps = (state, props) => {
  // props.widgets = state.events.activeEvent ? state.events.activeEvent.widgets : null;
  return {
    displayWidgets: state.events.activeEvent ? state.events.activeEvent.widgets : null
  };
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
};

export default connect(mapStateToProps)(WidgetManager);
