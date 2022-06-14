/**
 * Application
 */
 import React, { Fragment, FunctionComponent, useState, useRef, useCallback } from 'react';
 import { BryntumDemoHeader, BryntumThemeCombo, BryntumScheduler, BryntumNumberField, BryntumButton } from '@bryntum/scheduler-react';
 import { Toast, EventModel, Scheduler } from '@bryntum/scheduler';
 import { schedulerConfig } from './BryntumConfig';
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
             </div>
             <BryntumScheduler
                 ref = {schedulerRef}
                 {...schedulerConfig}
                 barMargin = {barMargin}
                 onEventSelectionChange = {onEventSelectionChange}
             />
         </Fragment>
     );
 };
 
 export default BryntumCalendar;
 