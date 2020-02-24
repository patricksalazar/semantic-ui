import React, {useState} from "react";
import classnames from "classnames";
import { Sidebar, Segment } from "semantic-ui-react";

import Dashboard from "../components/Dashboard";
import NavMenu from "../components/NavMenu";
import LeftSidebar from '../components/LeftSidebar';

import "../styles/css/main.css";

const Home = () => {
	const [isSidebarMinimized, setSidebarMinimized] = useState(true);
  
  const handleLeftSidebar = (e) => {
    console.log("isSidebar:"+JSON.stringify(isSidebarMinimized));
    setSidebarMinimized(!isSidebarMinimized);
  }

  return(
	<Sidebar.Pushable as={Segment}>
    <LeftSidebar minimized={isSidebarMinimized} />
		<Sidebar.Pusher>
			<Segment basic>
				<div className={classnames("navslide navwrap", {'marginlefting': isSidebarMinimized})}>
					<NavMenu handleLeftSidebar={handleLeftSidebar} />
				</div>
				<div className="mainWrap navslide">
					<Dashboard />
				</div>
			</Segment>
		</Sidebar.Pusher>
	</Sidebar.Pushable>
);}

export default Home;
