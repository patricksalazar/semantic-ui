import React, {useState} from "react";
import { Menu, Input, Icon, Dropdown, Image } from "semantic-ui-react";

import toggleFullScreen from '../utils/display';

const suggestedPeople = [
  {
    key: 'janice',
    text: 'Janice Robinson',
    value: 'Janice Robinson',
    image: {avatar: true, src: "../img/avatar/people/enid.png"},
  },
  {
    key: 'cynthia',
    text: 'Cynthia May',
    value: 'Cynthia May',
    image: {avatar: true, src: "../img/avatar/people/Hershell.png"},
  },
  {
    key: 'hugh',
    text: 'Hugh Carter',
    value: 'Hugh Carter',
    image: {avatar: true, src: "../img/avatar/people/Rick.png"},
  }
]

const suggestedByFriends = [
  {
    key: 'pauline',
    text: 'Pauline Cain',
    value: 'Pauline Cain',
    image: {avatar: true, src: "../img/avatar/people/Meggie.png"},
  },
  {
    key: 'marco',
    text: 'Marco Beck',
    value: 'Marco Beck',
    image: {avatar: true, src: "../img/avatar/people/Glenn.png"},
  },
  {
    key: 'sue',
    text: 'Sue Quinn',
    value: 'Sue Quinn',
    image: {avatar: true, src: "../img/avatar/people/Daryl.png"},
  }
]

// ui equal width left aligned padded grid stackable
// ui stackable padded left aligned equal width grid
const NavMenu = ({handleLeftSidebar}) => { 
  const [activeItem, setActiveItem] = useState('gamepad');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const handleFullScreen = (e, {name}) => {
    handleItemClick(e, {name});
    toggleFullScreen(document.body);
  }

  return(
	<Menu icon borderless className="grid" data-color="inverted white">
		<Menu.Item
			name="leftside"
      className="labeled leftside"
			active={activeItem === "leftside"}
      onClick={handleLeftSidebar}
		>
			<Icon name="bars" size="big" />
		</Menu.Item>

		<Menu.Item
			name="fullscreen"
      className="labeled expand"
			active={activeItem === "fullscreen"}
			onClick={handleFullScreen}
		>
			<Icon name="expand arrows alternate" size="big" />
		</Menu.Item>

		<Menu.Item
			name="search"
			active={activeItem === "search"}
			onClick={handleItemClick}
		>
			<Input className='icon' icon='search' placeholder='Search...' />
		</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Dropdown item className="labeled" 
          icon={<Icon.Group size='large'>
            <Icon name='bell' />
            <div className="ui circular floating red mini label ">10</div>
          </Icon.Group>}
        >
          <Dropdown.Menu>
            <Dropdown.Header content='People You May know' />
            {suggestedPeople.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
            <Dropdown.Header content='Your Friends Friends' />
            {suggestedByFriends.map((option) => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>
        <Dropdown item className="labeled" icon={{ name:'user', size: 'large', text:""}} >
          <Dropdown.Menu direction="left">
            <Dropdown.Item key="mail" as="a" href="mail.html">Inbox</Dropdown.Item>
            <Dropdown.Item key="profile" as="a" href="profile.html">Profile</Dropdown.Item>
            <Dropdown.Item key="settings" as="a" href="settings.html">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item key="help" as="a">Need help?</Dropdown.Item>
            <Dropdown.Item key="logout" as="a" href="/login">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item
        name='logout'
        active={activeItem === 'logout'}
        onClick={handleItemClick}
      >
        <Image avatar src="../img/avatar/people/enid.png"/>
      </Menu.Item>
    </Menu.Menu>
	</Menu>
);
}
export default NavMenu;
