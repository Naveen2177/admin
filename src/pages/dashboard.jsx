import React from 'react'
import '../styles/dashboard.css'
// import { useSelector, useDispatch } from 'react-redux'


const Dashboard = () => {

  // const entity = useSelector(state => state)
  // console.log('hello entity', entity )

  return (
    <>
 
     <div className='content'>
      <h1 className='ext-dark-emphasis px-5'>DashBoard</h1> 
        
          <div className='px-5 '>
            <h2>Admin Dashboard</h2>
          </div>

          <div className='px-5'>28-March-"2023-----4-April-"2023</div>

          <div className='row px-5'>

            <div className='col-3'>
              <p>TOTAL REVENUE</p>
              <h4>Rp0</h4>
            </div>

            <div className='col-3'>
              <p>QUOTES COUNT</p>
              <h4>Rp0</h4>
            </div>

            <div className='col-3'>
              <p>TOP5 DISTRIBUTERS REVENUE</p>
              <h4>Rp0</h4>
            </div>

            <div className='col-3'>
              <p>TOP5 DISTRIBUTERS REVENUE</p>
              <h4>Rp0</h4>
            </div>

            <div></div>
            <div></div>

            <div>
              <ul className='list-unstyled'>
                <li>RENT</li>
                <li>COMPANY NAME</li>
                <li>NUMBER ORDERS PLACED TILL DATE</li>
                <li>TOTAL REVENUE RECEVIDE TILL DATE</li>
              </ul>
            </div>

          </div>
        </div>

    </>
  )
}

export default Dashboard