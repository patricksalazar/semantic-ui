import React, { useState } from "react";
import classnames from "classnames";
import { Sidebar, Menu, Image, Dropdown } from "semantic-ui-react";

const RightSidebar = ({isOpen, setOpen}) => {
  // const [activeIndex, setActiveIndex] = useState(0);

	// const handleClick = (e, { index }) => {
  //   if (index !== activeIndex) {
  //     setActiveIndex(index);
  //   }else {
  //     setActiveIndex(-1);
  //   }
  // }

  return (
    <Sidebar
      as={Menu}
      inverted
      vertical
      visible={isOpen}
      animation="overlay"
      direction="right"
      onHide={() => setOpen(false)}
      className={classnames('borderless sidemenu grey')}
    >
      <Menu.Item as="a" className="logo">
        <Image src="img/thumblogo.png" ui={false} />
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
};
export default RightSidebar;
