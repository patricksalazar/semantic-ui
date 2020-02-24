import React, { useState } from "react";
import classnames from "classnames";
import { Sidebar, Menu, Icon, Image, Accordion, Button, Dropdown } from "semantic-ui-react";

const LeftSidebar = ({minimized}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHidden, setHidden] = useState(true);
  // const [isMinimized, setMinimized] = useState(false);
  // const [isMState, setMState] = useState(false);

	const handleClick = (e, { index }) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }else {
      setActiveIndex(-1);
    }
  }

  const toggleSidebar = (e) => {
    setHidden(!isHidden);
  }

  if (!minimized) {
    return (
      <Sidebar
        as={Menu}
        inverted
        vertical
        animation="push"
        className={classnames('borderless sidemenu grey', {'very thin icon': minimized})}
        visible={isHidden}
        icon="labeled"
        // width="thin"
      >
          <Menu.Item as="a" className="logo">
            <Image src="img/logo.png" hidden={minimized} />
            <Image src="img/thumblogo.png" hidden={!minimized} />
          </Menu.Item>
          <Menu.Item>
            <Button name="toggle-sidebar" onClick={toggleSidebar} >Toggle</Button>
          </Menu.Item>
          <Accordion inverted>
            <Accordion.Title as="a" className="item"
              active={activeIndex === 0}
              index={0}
              onClick={handleClick}
            >
              <Icon name="dashboard" className="titleIcon" />
              Dashboard
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0} as="div">
              <Menu.Item  as="a" href="index.html" className="transition">
                Dashboard v1
              </Menu.Item>
            </Accordion.Content>
            <Accordion.Title as="a" className="item"
              active={activeIndex === 1}
              index={1}
              onClick={handleClick}
            >
              <Icon name="lightbulb outline" className="titleIcon" />
              Apps
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1} as="div">
              <Menu.Item  as="a" href="inbox.html" className="transition">
                Inbox
              </Menu.Item>
              <Menu.Item  as="a" href="chat.html" className="transition">
                Chat
              </Menu.Item>
              <Menu.Item  as="a" href="filter.html" className="transition">
                Filter
              </Menu.Item>
              <Menu.Item  as="a" href="todo.html" className="transition">
                Todo
              </Menu.Item>
            </Accordion.Content>
            <Accordion.Title as="a" className="item"
              active={activeIndex === 2}
              index={2}
              onClick={handleClick}
            >
              <Icon name="world" className="titleIcon" />
              Layout
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2} as="div">
              <Menu.Item  as="a" href="sidebar.html" className="transition">
                Sidebar
              </Menu.Item>
              <Menu.Item  as="a" href="nav.html" className="transition">
                Nav
              </Menu.Item>
              <Menu.Item  as="a" href="box.html" className="transition">
                Box
              </Menu.Item>
              <Menu.Item  as="a" href="cards.html" className="transition">
                Cards
              </Menu.Item>
              <Menu.Item  as="a" href="color.html" className="transition">
                Color
              </Menu.Item>
              <Menu.Item  as="a" href="comment.html" className="transition">
                Comment
              </Menu.Item>
            </Accordion.Content>
            <Accordion.Title as="a" className="item"
              active={activeIndex === 3}
              index={3}
              onClick={handleClick}
            >
              <Icon name="table" className="titleIcon" />
              Table
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3} as="div">
              <Menu.Item  as="a" href="table.html" className="transition">
                Static Table
              </Menu.Item>
              <Menu.Item  as="a" href="datatable.html" className="transition">
                Datatable
              </Menu.Item>
              <Menu.Item  as="a" href="editable.html" className="transition">
                Editable
              </Menu.Item>
            </Accordion.Content>
          </Accordion>
      </Sidebar>
    );
  }else {
    return (
      <Sidebar
        as={Menu}
        inverted
        vertical
        animation="push"
        className={classnames('borderless sidemenu grey', {'very thin icon': minimized})}
        visible={isHidden}
        icon="labeled"
        // width="thin"
      >
        <Menu.Item as="a" className="logo">
          <Image src="img/thumblogo.png" />
        </Menu.Item>
        <Dropdown item icon="dashboard" scrolling>
          <Dropdown.Menu className="transition">
            <Dropdown.Header>Dashboard</Dropdown.Header>
            <Dropdown.Item as="a" href="/index.html">Dashboard v1</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item icon="lightbulb outline" scrolling>
          <Dropdown.Menu className="transition">
            <Dropdown.Header>Apps</Dropdown.Header>
            <Dropdown.Item as="a" href="/inbox.html">Inbox</Dropdown.Item>
            <Dropdown.Item as="a" href="/chat.html">Chat</Dropdown.Item>
            <Dropdown.Item as="a" href="/filter.html">Filter</Dropdown.Item>
            <Dropdown.Item as="a" href="/todo.html">Todo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item icon="world" scrolling>
          <Dropdown.Menu className="transition">
            <Dropdown.Header>Layout</Dropdown.Header>
            <Dropdown.Item as="a" href="/sidebar.html">Sidebar</Dropdown.Item>
            <Dropdown.Item as="a" href="/nav.html">Nav</Dropdown.Item>
            <Dropdown.Item as="a" href="/box.html">Box</Dropdown.Item>
            <Dropdown.Item as="a" href="/cards.html">Cards</Dropdown.Item>
            <Dropdown.Item as="a" href="/color.html">Color</Dropdown.Item>
            <Dropdown.Item as="a" href="/comment.html">Comment</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Sidebar>
    );
  }

};
export default LeftSidebar;
