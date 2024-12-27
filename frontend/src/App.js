import { useState, React } from 'react';
import './App.css';
import LoginPage from './LoginPage.js';
import DefaultLayout from './layout/DefaultLayout.js';
import Dashboard from './page/Dashboard.js';
import TicketsList from './page/TicketsList.js';
import TicketPage from './page/TicketPage.js';
import AddTicket from './page/AddTicket.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="app-pane">
        <Routes>
          <Route path="/" exact element={<LoginPage />}/>
          <Route element={<DefaultLayout />}>
            <Route path="/home" element={<Dashboard />}/>
            <Route path="/addTicket" element={<AddTicket />}/>
            <Route path="/tickets" element={<TicketsList />}/>
            <Route path="/ticket/:id" element={<TicketPage />}/>
          </Route>
        </Routes>
    </div>
    
  );
}

export default App;
