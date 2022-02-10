import React from 'react';
import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from './context';

const Home = () => {
  const { isSidebarOpen, toggleSidebar, toggleModal, isModalOpen } =
    useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => toggleSidebar(isSidebarOpen)}
      >
        <FaBars />
      </button>
      <button className="btn" onClick={() => toggleModal(isModalOpen)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
