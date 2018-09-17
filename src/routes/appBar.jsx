import React from 'react';
// @material-ui/icons
import MapIcon from '@material-ui/icons/Public';
import VesselsIcon from '@material-ui/icons/DirectionsBoat';
import PortsIcon from '@material-ui/icons/DeviceHub';
import CompaniesIcon from '@material-ui/icons/Business';
import CommunityIcon from '@material-ui/icons/Repeat';
import SolutionsIcon from '@material-ui/icons/Highlight';

const appBarRoutes = [
  {
    id: 1,
    path: '/',
    name: 'Live Map',
    icon: <MapIcon />,
  },
  {
    id: 2,
    path: '/',
    name: 'Vessels',
    icon: <VesselsIcon />,
    children: [
      {
        id: 1,
        path: '/',
        name: 'All Vessels',
      },
      {
        id: 2,
        path: '/',
        name: 'My Fleets',
      },
      {
        id: 3,
        path: '/',
        name: 'Vessels near me',
      },
      {
        id: 4,
        path: '/',
        name: 'Vessel Photos',
      },
    ],
  },
  {
    id: 3,
    path: '/',
    name: 'Ports',
    icon: <PortsIcon />,
    children: [
      {
        id: 1,
        path: '/',
        name: 'Search Ports',
      },
      {
        id: 2,
        path: '/',
        name: 'Arrivals & Departures',
      },
      {
        id: 3,
        path: '/',
        name: 'Expected Arrivals',
      },
      {
        id: 4,
        path: '/',
        name: 'Ports near me',
      },
      {
        id: 5,
        path: '/',
        name: 'Port Photos',
      },
    ],
  },
  {
    id: 4,
    path: '/',
    name: 'Companies',
    icon: <CompaniesIcon />,
  },
  {
    id: 5,
    path: '/',
    name: 'Community',
    icon: <CommunityIcon />,
    children: [
      {
        id: 1,
        path: '/',
        name: 'Cover your Area',
      },
      {
        id: 2,
        path: '/',
        name: 'Receiving Stations',
      },
      {
        id: 3,
        path: '/',
        name: 'Photographers',
      },
      {
        id: 4,
        path: '/',
        name: 'Photo Upload',
      },
      {
        id: 5,
        path: '/',
        name: 'Voyage Planner',
      },
      {
        id: 6,
        path: '/',
        name: 'Research',
      },
      {
        id: 7,
        path: '/',
        name: 'Report your own position',
      },
    ],
  },
  {
    id: 6,
    path: '/',
    name: 'Solutions',
    icon: <SolutionsIcon />,
    children: [
      {
        id: 1,
        path: '/',
        name: 'Online Services',
      },
      {
        id: 2,
        path: '/',
        name: 'Business Directory',
      },
      {
        id: 3,
        path: '/',
        name: 'Mobile Apps',
      },
      {
        id: 4,
        path: '/',
        name: 'Embed Map',
      },
      {
        id: 5,
        path: '/',
        name: 'Data Archives',
      },
      {
        id: 6,
        path: '/',
        name: 'Data Services (API)',
      },
    ],
  },
];

export default appBarRoutes;
