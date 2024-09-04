import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
    <>
    <div class="layout">
        <aside class="sidebar">
            <div class="logo">
                <img src="logo.png" alt="Logo" width="100"/>
            </div>

            <div class="button-group">
                <a href="#" role="button" class="secondary">Button 1</a>
                <a href="#" role="button" class="secondary">Button 2</a>
                <a href="#" role="button" class="secondary">Button 3</a>
            </div>

            <a href="#" role="button" class="logout-button button contrast">Logout</a>
        </aside>

        <main class="main-content">
            <h1>Welcome to the Main Content Area</h1>
            <p>This is where the main content of the page will be displayed.</p>
        </main>
    </div>
    </>
  )
}

export default Dashboard