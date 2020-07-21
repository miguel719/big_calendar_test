import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import dates from 'react-big-calendar/lib/utils/dates';
let moment = require('moment');
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar)
const now = new Date()
const  events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
    img: 'https://sites.google.com/a/netcmmi.com/share/_/rsrc/1393402253414/img/png/s/star-d02.png'
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
      displayDragItemInCell: true,
      current_date: null,
    }

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
  }

  handleDragStart = event => {
    this.setState({ draggedEvent: event })
  }

  dragFromOutsideItem = () => {
    return this.state.draggedEvent
  }

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = this.state

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    }

    this.setState({ draggedEvent: null })
    this.moveEvent({ event, start, end })
  }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state

    // eslint-disable-next-line no-unused-vars
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }
  handleClick=()=>{
    console.log('asfsdafsa')
  }
  EventComponent = (event) => { return ( <span> <strong> here we go! + ${event.event.id} </strong> <br></br>
   <img alt=' ' src={event.event.img}
   onClick={this.handleClick}
   ></img>
   </span> ) }
  onView=(view)=>{
    console.log('#### onView');
    console.log('#### view=', view);

    this.setState({
      current_view: view
    });

   // this.updateTimes(this.state.current_date, view);
  }
  onNavigate =(date, view)=>{
    console.log('#### onNavigate');
    console.log('#### date=', date);
    console.log('#### view=', view);
    //const new_date = moment(date);
    const new_date = new Date();
    this.setState({
      current_date: new_date
    });

   // this.updateTimes(new_date, view);
  }

  updateTimes(date = this.state.current_date, view = this.state.current_view){
    let start, end;
    // if view is day: from moment(date).startOf('day') to moment(date).endOf('day');
    if(view === 'day'){
      start = moment(date).startOf('day');
      end   = moment(date).endOf('day');
    }
    // if view is week: from moment(date).startOf('isoWeek') to moment(date).endOf('isoWeek');
    else if(view === 'week'){
      start = moment(date).startOf('isoWeek');
      end   = moment(date).endOf('isoWeek');
    }
    //if view is month: from moment(date).startOf('month').subtract(7, 'days') to moment(date).endOf('month').add(7, 'days'); i do additional 7 days math because you can see adjacent weeks on month view (that is the way how i generate my recurrent events for the Big Calendar, but if you need only start-end of month - just remove that math);
    else if(view === 'month'){
      start = moment(date).startOf('month').subtract(7, 'days');
      end   = moment(date).endOf('month').add(7, 'days');
    }
    // if view is agenda: from moment(date).startOf('day') to moment(date).endOf('day').add(1, 'month');
    else if(view === 'agenda'){
      start = moment(date).startOf('day');
      end   = moment(date).endOf('day').add(1, 'month');
    }

   // services.times.getFrom(start.format(API_GET_DATE_FORMAT), end.format(API_GET_DATE_FORMAT)).then(this.timesToEvents);
  }

  render() {
    return (
      <DragAndDropCalendar
        selectable
        localizer={localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        onSelectSlot={this.newEvent}
        onDragStart={console.log}
        onView={this.onView}
        onNavigate={this.onNavigate}
        //onNavigate={this.onNavigate}
        //min={new Date(2015, 3, 1)}
       // max={new Date(2015, 3, 30)}
        defaultView={Views.MONTH}
        date={new Date(2015, 3, 12)}
        popup={true}
        style={{ height: '750px',width: '95%' }}
        components={{
          event: this.EventComponent
        }}
        dragFromOutsideItem={
          this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
        }
        onDropFromOutside={this.onDropFromOutside}
        handleDragStart={this.handleDragStart}
      />
    )
  }
}


export default App;
