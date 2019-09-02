import React, { Component } from 'react';
import './Banner.css'
import ListCar from './FindCar.json'

class Banner extends Component {

  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.autoHideModal=this.autoHideModal.bind(this);
  }
  

  showBrandModal(){
    const elem = document.getElementById('modal-brand');
    elem.style.display = "block";
  }

  autoHideModal(event){
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const elem = document.getElementById('modal-brand');
      if(elem){
        elem.style.display = "none";
      }
    }
  }
   
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  
  

  componentDidMount() {
    //this.autoHideModal();
    document.addEventListener('mousedown',this.autoHideModal);
    //const elem = document.getElementById('modal-brand');
    // window.onclick=function(event){
    //   if(elem.style.display === "block" && event.target !== elem){
    //     console.log("hieudeptrai")
    //     elem.style.display = "none";
    //   }
    // }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown',this.autoHideModal)
  }
  
  
  render() {
    return (
      <section className="banner">
        <div className="banner-img">
          {
            ListCar.map((item) => {
              return console.log(item.nameBrand);
            })
          }
        </div>
        <div className="find-car">
          <div className="find-car-content">
            <div className="find-car-title">
              <span>Let your car<br/>work for you!</span>
            </div>
            <div className="find-about">
              <span>
                Find out what you could earn
              </span>
            </div>
            <form className="form">
              <div className="input-data">
                <div className="brand">
                  {/* <input type="text" placeholder="Brand" list="brand-name"/>
                    <datalist id="brand-name">
                      {
                        ListCar.map((item, index) => {
                          return <option key={index} value={item.nameBrand}></option>
                          //return console.log(item.nameBrand);
                        })
                      }
                      <option value="Boston"></option>
                      <option value="Cambridge"></option>
                    </datalist> */}
                  <input onClick={()=>this.showBrandModal()} id="brand-input" type="text" placeholder="Brand"/>
                  <div id="modal-brand" ref={this.setWrapperRef}>
                    {
                      ListCar.map((item,index) =>{
                        return <div 
                           
                            // onClick={()=>{
                            //   return console.log("hieudep trai")
                              
                            //   //document.getElementById('brand-input').value=item.nameBrand;
                            // }} 
                            key={index}
                          >
                            {item.nameBrand}
                        </div>
                      })
                    }
                  </div>
                </div>
                <div className="model">
                  <input type="text" placeholder="Model" />
                </div>
                <div className="age-year">
                  <select>
                    <option defaultValue value disabled>Age of car</option>
                  </select>
                </div>
              </div>
              <div className="submit-data">
                <div className="symol-money">
                  $
                  <span className="special-money">
                  </span>
                </div>
                <a href="true" className="form-btn">
                  <span>list your car</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;

//{"Audi":{"Model":[{"A1":[600,560,520]},{"A3":[720,640,560]},{"A4":[1000,920,840]}]}},
  //{"BMW":{"Model":[{"1 Series":[720,640,560]},{"2 Series":[800,720,640]},{"2 Series":[1200,1080,960]}]}}