/**
 * Application
 */
 import React, { Fragment, FunctionComponent, useState, useRef, useCallback } from 'react';
 import { BryntumScheduler, BryntumButton } from '@bryntum/scheduler-react';
 import { Toast, EventModel, Scheduler } from '@bryntum/scheduler';
 // import '@bryntum/scheduler/scheduler.classic.css';
 
 const BryntumCalendar: FunctionComponent = () => {
     const schedulerRef = useRef<BryntumScheduler>(null);
     const schedulerInstance = () => schedulerRef.current?.instance as Scheduler;
 
     const [barMargin, setBarMargin] = useState(5);
     const [selectedEvent, setSelectedEvent] = useState<EventModel | null>(null);
 
     // event selection change handler
     const onEventSelectionChange = useCallback(({ selected }: { selected: EventModel[] }) => {
         setSelectedEvent(selected.length > 0 ? selected[0] : null);
     }, []);
 
     // add event handler
     const addEvent = useCallback(() => {
         const scheduler = schedulerInstance();
         const startDate = new Date(scheduler.startDate.getTime());
         const endDate = new Date(startDate.getTime());
         const resource = scheduler.resourceStore.first;
 
         if (!resource) {
             Toast.show('There is no resource available');
             return;
         }
 
         endDate.setHours(endDate.getHours() + 2);
 
         scheduler.eventStore.add({
             resourceId : resource.id,
             startDate  : startDate,
             endDate    : endDate,
             name       : 'New task',
             eventType  : 'Meeting'
         });
     }, []);
 
     // remove event handler
     const removeEvent = useCallback(() => {
         selectedEvent?.remove();
         setSelectedEvent(null);
     }, [selectedEvent]);

     const thisEvents = [
        {
            "id": 1,
            "resourceId": "a",
            "name": "Meeting #1",
            "desc": "Discuss new features",
            "startDate": "2018-02-07 11:00",
            "endDate": "2018-02-07 14:00",
            "eventType": "Meeting",
            "eventColor": "blue",
            "iconCls": "b-fa b-fa-calendar"
        },
        {
            "id": 2,
            "resourceId": "b",
            "name": "Meeting #2",
            "desc": "Strategy meeting",
            "startDate": "2018-02-07 12:00",
            "endDate": "2018-02-07 15:00",
            "eventType": "Meeting",
            "eventColor": "blue",
            "iconCls": "b-fa b-fa-calendar"
        },
        {
            "id": 3,
            "resourceId": "c",
            "name": "Meeting #3",
            "desc": "Emerging markets",
            "startDate": "2018-02-07 13:00",
            "endDate": "2018-02-07 16:00",
            "eventType": "Meeting",
            "eventColor": "blue",
            "iconCls": "b-fa b-fa-calendar"
        },
        {
            "id": 4,
            "resourceId": "d",
            "name": "Meeting #4",
            "desc": "Code review",
            "startDate": "2018-02-07 09:00",
            "endDate": "2018-02-07 11:00",
            "eventType": "Meeting",
            "eventColor": "blue",
            "iconCls": "b-fa b-fa-calendar"
        },
        {
            "id": 5,
            "resourceId": "e",
            "name": "Appointment #1",
            "desc": "Dental",
            "startDate": "2018-02-07 10:00",
            "endDate": "2018-02-07 12:00",
            "eventType": "Appointment",
            "iconCls": "b-fa b-fa-clock"
        },
        {
            "id": 6,
            "resourceId": "f",
            "name": "Appointment #2",
            "desc": "Golf preparations",
            "startDate": "2018-02-07 11:00",
            "endDate": "2018-02-07 13:00",
            "eventType": "Appointment",
            "iconCls": "b-fa b-fa-golf-ball"
        },
        {
            "id": 7,
            "resourceId": "g",
            "name": "Appointment #3",
            "desc": "Important",
            "startDate": "2018-02-07 14:00",
            "endDate": "2018-02-07 17:00",
            "location": "Home office",
            "eventColor": "red",
            "eventType": "Appointment",
            "iconCls": "b-fa b-fa-exclamation-circle"
        },
        {
            "id": 8,
            "resourceId": "h",
            "name": "Meeting #5",
            "desc": "Planning",
            "startDate": "2018-02-07 13:00",
            "endDate": "2018-02-07 15:00",
            "eventType": "Meeting",
            "eventColor": "blue",
            "iconCls": "b-fa b-fa-calendar"
        },
        {
            "id": 9,
            "resourceId": "i",
            "name": "Important activity",
            "desc": "Hanging at the bar",
            "startDate": "2018-02-07 16:00",
            "endDate": "2018-02-07 19:00",
            "eventType": "Appointment",
            "iconCls": "b-fa b-fa-beer",
            "eventColor": "orange"
        },
        {
            "id": 10,
            "resourceId": "j",
            "name": "Overtime",
            "desc": "Deadline approaching",
            "startDate": "2018-02-07 17:00",
            "endDate": "2018-02-07 20:00",
            "eventType": "Meeting",
            "iconCls": "b-fa b-fa-calendar",
            "eventColor": "blue"
        },
        {
            "id": 11,
            "resourceId": "k",
            "name": "Scrum",
            "desc": "Team A",
            "startDate": "2018-02-07 9:00",
            "endDate": "2018-02-07 11:00",
            "eventType": "Appointment",
            "iconCls": "b-fa b-fa-calendar",
            "eventColor": "blue"
        }
    ];
     const [events, setEvents] = useState(thisEvents);
    
     const updateEvents = useCallback(() => {
        const scheduler = schedulerInstance();
        const startDate = new Date(scheduler.startDate.getTime());
        const endDate = new Date(startDate.getTime());
        const resource = scheduler.resourceStore.first;

        if (!resource) {
            Toast.show('There is no resource available');
            return;
        }

        endDate.setHours(endDate.getHours() + 2);

        scheduler.eventStore.add({
            resourceId : thisEvents[2].resourceId,
            startDate  : startDate,
            endDate    : endDate,
            name       : thisEvents[0].name,
            eventType  : thisEvents[0].eventType
        });
    }, []);

        const [resources, setResources] = useState([
            { "id": "a", "name": "Arcady", "role": "Developer", "speciality": "Customer support" },
            { "id": "b", "name": "Dave", "role": "Sales", "speciality": "Customer help" },
            { "id": "c", "name": "Henrik", "role": "Sales", "speciality": "Customer support" },
            { "id": "f", "name": "Celia", "role": "CEO", "speciality": "Customer call" },
            { "id": "g", "name": "Lee", "role": "CTO", "speciality": "Customer Chat" },
            { "id": "d", "name": "Madison", "role": "Developer", "speciality": "Customer support" },
            { "id": "e", "name": "Maxim", "role": "Developer", "speciality": "Customer support" },
            { "id": "h", "name": "Amit", "role": "Sales", "speciality": "Customer support" },
            { "id": "i", "name": "Kate", "role": "Developer", "speciality": "Customer support" },
            { "id": "j", "name": "Mark", "role": "Developer", "speciality": "Customer support" },
            { "id": "k", "name": "Emilia", "role": "Developer", "speciality": "Customer support" }
        ]);

        
        const [timeRanges, setTimeRanges] = useState([
            {
                "name":"Lunch",
                "startDate": "2018-02-07 12:00",
                "endDate": "2018-02-07 13:00",
                "cls": "striped"
            }
        ]);

        const [columns, setColumns] = useState([
            {
                type      : 'resourceInfo',
                text      : 'Staff',
                showImage : true,
                width     : 130
            },
            {
                text  : 'Type',
                field : 'role',
                width : 130
            },
            {
               text : 'Speciality',
               field : 'speciality',
               with : 140
            }
        ]);
        const [eventsVersion, setEventsVersion] = useState(1);
        const [resourcesVersion, setResourcesVersion] = useState(1);

     return (
         <Fragment>
            <div>PCF Control Sandbox</div>
             <div className = "demo-toolbar align-right">
                 {(() => {
                     return selectedEvent ? (
                         <div className = "selected-event">
                             <span>Selected event: </span>
                             <span>{selectedEvent.name}</span>
                         </div>
                     ) : (
                         ''
                     );
                 })()}

                 <BryntumButton icon = "b-fa-plus" cls = "b-green" onClick = {addEvent} />
                 <BryntumButton
                     icon = "b-fa-trash"
                     cls = "b-red"
                     onClick = {removeEvent}
                     disabled = {!selectedEvent}
                 />
                 <BryntumButton
                     icon = "b-fa-pencil"
                     cls = "b-blue"
                     onClick = {updateEvents}
                 />
             </div>
             <BryntumScheduler
                 ref={schedulerRef}
                 
                 resources={resources}
                 barMargin = {barMargin}
                 resourceImagePath='users/'
                 viewPreset='hourAndDay'
                 timeRangesFeature='10'
                 columns={columns}
                 startDate={new Date(2018, 9, 17, 8)}
                 endDate={new Date(2018, 9, 17, 18)}
                 
                 timeRanges={timeRanges}
                 events={events}
             /> 
         </Fragment>
     );
 };
 
 export default BryntumCalendar;
 