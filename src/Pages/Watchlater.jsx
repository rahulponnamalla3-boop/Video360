import React from 'react'
import Layout from './Layout'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Watchvideos from '../Components/Watchvideos'

const Watchlater = () => {
  return (
  <Layout>
    <div className="py-0">
        <div className="d-flex justify-content-between align-items-center mb-0">
          <h6 className="mb-0  text-white fs-6 ps-3">Watch Later</h6>

          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By"
            className="custom-dropdown-btn"
          >
            <Dropdown.Item href="#/action-1">Top Rated</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Viewed</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Close</Dropdown.Item>
          </DropdownButton>
        </div>

        
      </div>


      <Watchvideos />

            <div>
  <nav>
    <ul className="pagination justify-content-center pagination-sm mb-4 ">
      <li className="page-item ">
        <a className="page-link" href="#" aria-label="Previous">Previous</a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">2</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">3</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">Next</a>
      </li>
    </ul>
  </nav>
</div>


  </Layout>
  )
}

export default Watchlater;