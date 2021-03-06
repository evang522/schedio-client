//================================== Import React Dependencies ====================>
import React from 'react';
import Moment from 'react-moment';
import {setCurrentEvent} from '../store/actions/eventlist.actions';
import {connect} from 'react-redux';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

/**
 * This represents an individual event in the list of events contained within EventList. Event info will be passed as props by the parent component, which will
 * be looping through the list of events in the state and displaying multiple EventListEvent components.
 */
export class  EventListEvent extends React.Component {
  
  handleViewEvent() {
    this.props.dispatch(setCurrentEvent(this.props.event));
    localStorage.setItem('lastViewedEvent', this.props.event.id);
    localStorage.setItem('lastViewedTimestamp', Number(Date.now()));
    this.props.setSlideIndex();
  }

  render() {
    
    return (
      
      <div className='event-list-event'>
        <Card style={{'marginTop':'1em'}}>
          <CardText style={{paddingRight: 0}}/>
          <div className='card-title'>
            <b>{this.props.event.title}</b>
          </div>
          <div className='card-subtitle'>
            <Moment fromNow date={Number(this.props.event.starttime)}></Moment>
          </div>
          <CardText>
          On <Moment format={'dddd, MMMM Do, h:mm a'}date={Number(this.props.event.starttime)}> </Moment>
          </CardText>
          <CardText>
           in {this.props.event.location.address ? this.props.event.location.address : ''}
          </CardText>
          <RaisedButton style={{'marginBottom':'1em'}}  secondary label='View Event' onClick={() => this.handleViewEvent()}/>
        </Card>
      </div>
    );
  }
};

export default connect()(EventListEvent);