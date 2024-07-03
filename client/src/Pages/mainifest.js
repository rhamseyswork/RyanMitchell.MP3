import Error404 from './404.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx'
import Profile from './Profile/Profile.jsx'
import Role from './Role/Role.jsx'
import PortalB from './Portal/Portal.jsx';


//admin
import Portal from './admin/Portal/Protal.jsx';
import Metrics from './admin/Metrics/Metrics.jsx';
import LinkTreeAdmin from './admin/LinkTree/LinkTree.jsx';
const admin = {
    Portal,
    Metrics,
    LinkTreeAdmin
}

import PortalA from './superAdmin/Portal/Portal.jsx';
const superAdmin = {
    PortalA,
}


const manifest = {
    Error404,  
    Home,
    Login,
    Profile,
    Role,
    PortalB,
    admin,
    superAdmin
}


export default manifest;