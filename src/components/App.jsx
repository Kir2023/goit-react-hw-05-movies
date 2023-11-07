import { Home } from 'pages/Home/Home';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#0014a8',
      }}
    >
      {/* <NavLink className="header-link" to="/">
        Home
      </NavLink> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
