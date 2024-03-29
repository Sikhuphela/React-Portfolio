// SideBarData.js
import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    id: 'about-section'
  },         
  {
  title: 'About',
  path: '/about',
  icon: <IoIcons.IoMdPerson />,
  cName: 'nav-text',
  id: 'skills-section' // ID of the about section
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <IoIcons.IoMdCloseCircle />,
    cName: 'nav-text',
    id: 'project-section' // ID of the about section
  },
  {
    title: 'Projects',   
    path: '/projects',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    id: 'project-section' // ID of the about section
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
    id: 'contacts-section' // ID of the about section
  },
];