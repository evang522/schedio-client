//================================== Import React Dependencies ====================>
import React from 'react';
import {connect} from 'react-redux';
import EventListEvent from './EventListEvent';
import './styles/EventList.css';
import {fetchUserEvents} from '../store/actions/eventlist.actions';
//================================== Event List Component ====================>
/**
 * Responsible for Containing a list of Events belonging to the user, conditionally displaying upcoming events or past events.
 * The Events listed will be individual Event components themselves. 
 */
export class UpcomingEventsList extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchUserEvents());
  }

  render() {

  // This code should be changed to loop over this.PROPS.events, not this.events. 
    const events = this.props.events ? this.props.events.filter(event => Number(event.starttime) > Number(Date.now)).map((event,index) => <EventListEvent event={event} key={index} /> ) : '';

    /*
  Regarding the question of how to display upcoming events vs past events. I would first argue that an event should be `upcoming` until it is `past`. For an MVP we
  shouldn't be messing too much with attempting to create a 'Happening Now' event category.
  
  Next, I would say that we can store a property in the state of this component or in the redux state recording whether the user is currently viewing upcoming events,
  past events, or the current event. If the user is viewing the upcoming events, we can display all events with a startdate that is after the current moment. If the user is viewing past 
  events, we can display events with a starttime that is less than the current moment's starttime value. 
  */
    console.log(this.props, 'EVENTS');
    return(
      <div className='event-list-container'>
        <div className='event-list-header'>
          Hello from the Event List Component
        </div>
        <section className='events-list'>
          {events}

        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    events:state.events.eventList
  };
};

export default connect(mapStateToProps)(UpcomingEventsList);