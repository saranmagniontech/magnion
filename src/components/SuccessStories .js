import React from 'react'
import'./sucessstories.css'
import { ReactComponent as MySVG1 } from '../images/I love ooty.svg'
import { ReactComponent as MySVG2 } from '../images/Garden.svg'
import { ReactComponent as MySVG3 } from '../images/Umbrella.svg'
import { ReactComponent as MySVG4 } from '../images/pic.svg'
import { ReactComponent as MySVG5 } from '../images/Ride.svg'





function SuccessStories () {
  return (
    <div>
      
      <div className="page-container">
      <section className="first_bgmu">
        <div className="container-xl">
          <h3 className="bullet">Create your <span className="bgmu_1 bullet">memories</span> with</h3>
          <h2>Prestige Clubs and Resort</h2>
          <div className="types_bgm">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
                <h3>14K+</h3>
                <p>Members</p>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <h3>20K+</h3>
                <p>Memories</p>
              </div>
            </div>
          </div>
          <div className="list_bgm">
            <div className="row">
              <div className="col col-6 col-sm-4 col-lg">
                <div className="card">
                  <MySVG1 />
                </div>
              </div>
              <div className="col col-6 col-sm-4 col-lg">
                <div className="card">
                <MySVG2 />
                </div>
              </div>
              <div className="col col-6 col-sm-4 col-lg">
                <div className="card">
                <MySVG3 />
                </div>
              </div>
              <div className="col col-6 col-sm-4 col-lg">
                <div className="card">
                <MySVG4 />
                </div>
              </div>
              <div className="col col-6 col-sm-4 col-lg">
                <div className="card">
                <MySVG5 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
 
      
      







      
      
       </div>
  )
}

export default SuccessStories 