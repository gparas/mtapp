// @material-ui/icons
import MapIcon from '@material-ui/icons/Public';
import VesselsIcon from '@material-ui/icons/DirectionsBoat';
import PortsIcon from '@material-ui/icons/DeviceHub';
import CompaniesIcon from '@material-ui/icons/Business';
import CommunityIcon from '@material-ui/icons/Repeat';
import SolutionsIcon from '@material-ui/icons/Highlight';

const navbarRoutes = [
  {
    id: 1,
    path: '/',
    label: 'Live Map',
    icon: MapIcon,
    children: null,
  },
  {
    id: 2,
    path: '/',
    label: 'Vessels',
    icon: VesselsIcon,
    children: [
      {
        id: 1,
        path: '/',
        label: 'All Vessels',
      },
      {
        id: 2,
        path: '/',
        label: 'My Fleets',
      },
      {
        id: 3,
        path: '/',
        label: 'Vessels near me',
      },
      {
        id: 4,
        path: '/',
        label: 'Vessel Photos',
      },
    ],
  },
  {
    id: 3,
    path: '/',
    label: 'Ports',
    icon: PortsIcon,
    children: null,
  },
  {
    id: 4,
    path: '/',
    label: 'Companies',
    icon: CompaniesIcon,
    children: null,
  },
  {
    id: 5,
    path: '/',
    label: 'Community',
    icon: CommunityIcon,
    children: null,
  },
  {
    id: 6,
    path: '/',
    label: 'Solutions',
    icon: SolutionsIcon,
    children: null,
  },
];

export default navbarRoutes;
