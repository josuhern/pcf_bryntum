/**
 * Application configuration
 */

 import { BryntumSchedulerProps } from '@bryntum/scheduler-react';

 const schedulerConfig: BryntumSchedulerProps = {
     resourceImagePath : 'users/',
 
     startDate : new Date(2018, 1, 7, 8),
     endDate   : new Date(2018, 1, 7, 22),
 
     viewPreset : 'hourAndDay',
 
     crudManager : {
         transport : {
             load : {
                 url : 'data.json'
             }
         },
         autoLoad : true
     },
 
     timeRangesFeature : {
         narrowThreshold : 10
     },
 
     columns : [
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
     ]
 };
 
 export { schedulerConfig };
 