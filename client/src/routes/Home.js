import React, {useState} from "react";
import classnames from "classnames";
import { Sidebar, Segment } from "semantic-ui-react";

import Dashboard from "../components/Dashboard";
import NavMenu from "../components/NavMenu";
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

import "../styles/css/main.css";

const Home = () => {
	const [isSidebarMinimized, setSidebarMinimized] = useState(false);
	const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  
  const handleLeftSidebar = (e) => {
    setSidebarMinimized(!isSidebarMinimized);
  }

	const handleRightSidebar = (e) => {
    setRightSidebarOpen(!isRightSidebarOpen);
  }

  return(
	<Sidebar.Pushable as={Segment}>
    <LeftSidebar minimized={isSidebarMinimized} />
		<Sidebar.Pusher dimmed={isRightSidebarOpen}>
			<div className={classnames("navslide navwrap", isSidebarMinimized ? {"pushermin": true}: {"pushermax": true})}>
				<NavMenu handleLeftSidebar={handleLeftSidebar} handleRightSidebar={handleRightSidebar} />
			</div>
			<div className={classnames("mainWrap navslide", isSidebarMinimized ? {"pushermin": true}: {"pushermax": true})}>
				<Dashboard />
			</div>
		</Sidebar.Pusher>
		<RightSidebar isOpen={isRightSidebarOpen} setOpen={setRightSidebarOpen} />
	</Sidebar.Pushable>
);}

export default Home;
