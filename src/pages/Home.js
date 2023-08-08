import React from "react";
import "./Home.css";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import SettingsIcon from "@mui/icons-material/Settings";
import img from "../assets/human.jpg";
import Tabs from "../components/Tabs";

export default function Home() {
  const navItems = [
    {
      id: 1,
      name: "Command Center",
      logo: <BlindsClosedIcon />,
    },
    {
      id: 2,
      name: "Overview",
      logo: <AssuredWorkloadIcon />,
    },
    {
      id: 3,
      name: "Supplier Financial Risk",
      logo: <AssuredWorkloadIcon />,
    },
    {
      id: 4,
      name: "Intelligence",
      logo: <AssuredWorkloadIcon />,
    },
    {
      id: 5,
      name: "Supplier Relationship Manager",
      logo: <AssuredWorkloadIcon />,
    },
    {
      id: 6,
      name: "Settings",
      logo: <SettingsIcon />,
    },
  ];

  return (
    <div className="home-items">
      <div className='row  home-container'>
        <div className='col-3 sidebar'>
          <div className='logo'>
            <h1 >Kavidai.ai</h1>
          </div>
          <div className='nav-items'>
            {navItems.map((item) => (
              <p key={item.id}>
                <span>{item.logo}</span> {item.name}
              </p>
            ))}
          </div>
        </div>
        <div className='col-9 p-0'>
          <div className='navbar d-flex justify-between p-2'>
            <h1>Supplier Relationship Manager</h1>
            <div className='sub2 d-flex'>
              <p>Jones Ferdinand</p>
              <img
                className='human-img'
                src={img}
                alt=''
                srcset=''
              />
            </div>
          </div>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
