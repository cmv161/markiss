import React from 'react';
import ReactDOM from 'react-dom';
import './slider.css';


const Slider = () => {
  return (
    <div className="outer">


   
    <div className="w-50 mx-auto inner"  >



      <main >

        <div id="carouselExampleFade mx-auto" data-interval="1500" className="carousel slide carousel-fade  " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/af/2c/e2/517884_756x359.jpg" className="d-block" alt="" />
            </div>
            <div className="carousel-item">
              <img src="https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/01/b9/8d/515787_756x359.jpg" className="d-block" alt="" />
            </div>


            <div className="carousel-item">
              <img src="https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/80/fa/96/512988_756x359.jpg" className="d-block" alt="" />
            </div>

          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>





      </main>

    </div>
    </div>
  )






}

export default Slider;
