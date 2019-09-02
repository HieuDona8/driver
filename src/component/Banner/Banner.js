import React, { Component } from 'react';
import './Banner.css'
import ListCar from './FindCar.json'

class Banner extends Component {

  constructor(props) {
    super(props);
    this.setBrandModal = this.setBrandModal.bind(this);
    this.hideModalBrand=this.hideModalBrand.bind(this);

    this.state = {
      txtBrand : null,
      txtModel : null,
      txtAge   : null
    }
  }

  hideModalBrand(event){
    if (this.wrapperRefBrand && !this.wrapperRefBrand.contains(event.target)) {
      const brand = document.getElementById('brand');
      const elem = document.getElementById('modal-brand');
      if(elem){
        brand.removeChild(elem);
      }
    }
  }
   
  setBrandModal(node) {
    this.wrapperRefBrand = node;
  }

  createModalBrand(){
    const inputBrand = document.getElementById('brand-input');

    const brand = document.getElementById('brand');
    const modal = document.createElement('div');
    modal.id = 'modal-brand';
    brand.appendChild(modal);

    if(!inputBrand.value){
      ListCar.map((item,index) => {
        const modalItem = document.createElement('div');
        modalItem.innerHTML = item.nameBrand;
        modal.appendChild(modalItem);
        return true;
      })
    }else{
      const value = inputBrand.value;
      ListCar.map((item,index) => {        
        const re = new RegExp(value,"gi");
        if(String(item.nameBrand).search(re)>=0){
          const modalItem = document.createElement('div');
          modalItem.innerHTML = item.nameBrand;
          modal.appendChild(modalItem);
        }        
        return true;
      })
    }
  }

  isInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    })

    //const inputBrand = document.getElementById('brand-input');
    //remove old modal
    const brand = document.getElementById('brand');
    const oldModal = document.getElementById('modal-brand');
    if(oldModal){
      brand.removeChild(oldModal);
    }

    const modal = document.createElement('div');
    modal.id = 'modal-brand';
    brand.appendChild(modal);

    if(value){
      ListCar.map((item,index) => {        
        const re = new RegExp(value,"gi");
        if(String(item.nameBrand).search(re)>=0){
          const modalItem = document.createElement('div');
          modalItem.innerHTML = item.nameBrand;
          modal.appendChild(modalItem);
        }        
        return true;
      })
    }else{
      ListCar.map((item,index) => {        
        const modalItem = document.createElement('div');
        modalItem.innerHTML = item.nameBrand;
        modal.appendChild(modalItem);
        return true;
      })
    }
  }
  

  
  componentDidMount() {
    document.addEventListener('mousedown',this.hideModalBrand);
    //this.createModalBrand();

   
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown',this.hideModalBrand)

  }
  
  render() {
    return (
      <section className="banner">
        <div className="banner-img"></div>
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
                <div className="brand" id="brand"  ref={this.setBrandModal}>
                  <input name="txtBrand" onChange={(event)=>this.isInputChange(event)} onClick={()=>this.createModalBrand()} id="brand-input" type="text" placeholder="Brand"/>

                </div>
                <div className="model">
                  <input name="txtModel" type="text" placeholder="Model" />
                </div>
                <div className="age-year">
                  <select name="txtAge">
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