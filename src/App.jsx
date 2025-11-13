import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [selectedPages, setSelectedPages] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  })

  const handleCheckboxChange = (key) => {
    setSelectedPages(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="app-container">
      <div className="card">
        <div className="page-list">
          <div className="page-item">
            <span>All pages</span>
            <input
              type="checkbox"
              checked={selectedPages.allPages}
              onChange={() => handleCheckboxChange('allPages')}
              className="custom-checkbox"
            />
          </div>
          <div className="page-item">
            <span>Page 1</span>
            <input
              type="checkbox"
              checked={selectedPages.page1}
              onChange={() => handleCheckboxChange('page1')}
              className="custom-checkbox"
            />
          </div>
          <div className="page-item">
            <span>Page 2</span>
            <input
              type="checkbox"
              checked={selectedPages.page2}
              onChange={() => handleCheckboxChange('page2')}
              className="custom-checkbox"
            />
          </div>
          <div className="page-item">
            <span>Page 3</span>
            <input
              type="checkbox"
              checked={selectedPages.page3}
              onChange={() => handleCheckboxChange('page3')}
              className="custom-checkbox"
            />
          </div>
          <div className="page-item">
            <span>Page 4</span>
            <input
              type="checkbox"
              checked={selectedPages.page4}
              onChange={() => handleCheckboxChange('page4')}
              className="custom-checkbox"
            />
          </div>
        </div>
        <button className="done-btn">Done</button>
      </div>
    </div>
  )
}
