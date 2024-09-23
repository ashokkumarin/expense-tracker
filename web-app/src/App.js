import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Box, CssBaseline, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import logo from './assets/logo.png';  // Adjust the path to your logo file
import './App.css';

const drawerWidth = 240;

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Expense Tracker Logo" style={{ height: '40px', marginRight: '16px' }} /> {/* Logo */}
          <Typography variant="h6" noWrap component="div">
            Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        // Drawer configuration
      >
        {/* Drawer content */}
      </Drawer>

      <Box component="main" className="container">
        <Container>
          <div className="main-content">
            <Routes>
              <Route path="/addexpense" element={<AddExpenseForm />} />
              <Route path="/expenses" element={<ExpenseList />} />
              <Route path="/" element={<ExpenseList />} />
            </Routes>
          </div>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
