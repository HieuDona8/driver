import React, { Component } from 'react';
import './Banner.css'
import ListCar from './FindCar.json'

class Banner extends Component {

  constructor(props) {
    super(props);
    this.setBrandModal = this.setBrandModal.bind(this);
    this.hideModalBrand=this.hideModalBrand.bind(this);
    //model
    this.setModelModal = this.setModelModal.bind(this);
    this.hideModalModel = this.hideModalModel.bind(this);

    // this.state = {
    //   txtBrand : null,
    //   txtModel : null,
    //   txtAge   : null
    // }
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

  hideModalModel(event){
    if (this.wrapperRefModel && !this.wrapperRefModel.contains(event.target)) {
      const brand = document.getElementById('model');
      const elem = document.getElementById('modal-model');
      if(elem){
        brand.removeChild(elem);
      }
    }
  }
  setModelModal(node){
    this.wrapperRefModel = node;
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

        modalItem.addEventListener('click',()=>{
          inputBrand.value = modalItem.innerHTML;
          // this.setState({
          //   txtBrand : modalItem.innerHTML
          // })

          brand.removeChild(modal);
        })

        
        modal.appendChild(modalItem);

        //take null of model
        document.getElementById('model-input').value ="";
        return true;
      })
    }else{
      const value = inputBrand.value;
      ListCar.map((item,index) => {        
        const re = new RegExp(value,"gi");
        if(String(item.nameBrand).search(re)>=0){
          const modalItem = document.createElement('div');
          modalItem.innerHTML = item.nameBrand;

          modalItem.addEventListener('click',()=>{
            inputBrand.value = modalItem.innerHTML;
            // this.setState({
            //   txtBrand : modalItem.innerHTML
            // })
  

            brand.removeChild(modal);
          })

          modal.appendChild(modalItem);
        }

        //take null of model
        //document.getElementById('model-input').value ="";
        return true;
      })
    }

  }

  inputBrandChange(event){
    const inputBrand = document.getElementById('brand-input');
    
    //remove old modal
    const brand = document.getElementById('brand');
    const oldModal = document.getElementById('modal-brand');
    if(oldModal){
      brand.removeChild(oldModal);
    }

    const modal = document.createElement('div');
    modal.id = 'modal-brand';
    brand.appendChild(modal);

    if(inputBrand.value){
      ListCar.map((item,index) => {        
        const re = new RegExp(inputBrand.value,"gi");
        if(String(item.nameBrand).search(re)>=0){
          const modalItem = document.createElement('div');
          modalItem.innerHTML = item.nameBrand;

          modalItem.addEventListener('click',()=>{
            inputBrand.value = modalItem.innerHTML;
            brand.removeChild(modal);
          })

          modal.appendChild(modalItem);
        }    
        
        
        return true;
      })
    }else{
      //take price null;
      document.getElementById('model-input').value ="";
      document.getElementById('money').innerHTML ="$";


      ListCar.map((item,index) => {        
        const modalItem = document.createElement('div');
        modalItem.innerHTML = item.nameBrand;
        
        modalItem.addEventListener('click',()=>{
          inputBrand.value = modalItem.innerHTML;
          brand.removeChild(modal);
        })
        
        modal.appendChild(modalItem);

        
        return true;
      })
    }

    
  }
  /////////////////////////////////////////////
  //model
  createModalModel(){
    const inputBrand = document.getElementById('brand-input');
    const valueBrand = inputBrand.value;
    const self = this;
    if(valueBrand){
      const inputModel = document.getElementById('model-input');
      
      const model = document.getElementById("model");
      const modal = document.createElement('div');
      modal.id='modal-model';
      model.appendChild(modal);

      if(!inputModel.value){
        ListCar.map((item,index) => {
          //const re = new RegExp(value,"gi");
          //if(String(item.nameBrand).search(re)>=0){
          if(item.nameBrand === valueBrand){
            const listModel = item.listModel;
            listModel.map((itemModel)=>{
              const modalItem = document.createElement('div');
              modalItem.innerHTML = itemModel.nameModel;
              
              modalItem.addEventListener('click',()=>{
                inputModel.value = modalItem.innerHTML;
                ////
                self.getPrice();

                model.removeChild(modal);
              })

              modal.appendChild(modalItem);
              return true;
            })
          }
          //}        
          return true;
        })
      }else{
        const value = inputModel.value;
        ListCar.map((item,index) => {
          const re = new RegExp(value,"gi");
          if(item.nameBrand === valueBrand){
            const listModel = item.listModel;
            listModel.map((itemModel)=>{
              if(String(itemModel.nameModel).search(re)>=0){
                const modalItem = document.createElement('div');
                modalItem.innerHTML = itemModel.nameModel;
                
                modalItem.addEventListener('click',()=>{
                  inputModel.value = modalItem.innerHTML;
                  ////////
                  self.getPrice();

                  model.removeChild(modal);
                })
                modal.appendChild(modalItem);
              }
              return true;
            })
          }
          return true;
        })
      }

    }

  }

  inputModelChange(event){
    const self = this;
    const inputBrand = document.getElementById('brand-input');
    const valueBrand = inputBrand.value;

    const inputModel = document.getElementById('model-input');
    
    //remove old model
    const model = document.getElementById('model');
    const oldModal = document.getElementById('modal-model');
    if(oldModal){
      model.removeChild(oldModal);
    }

    const modal = document.createElement('div');
    modal.id = 'modal-model';
    model.appendChild(modal);
    if(inputModel.value){
      ListCar.map((item,index) => {
        const re = new RegExp(inputModel.value,"gi");
        if(item.nameBrand === valueBrand){
          const listModel = item.listModel;
          listModel.map((itemModel)=>{
            if(String(itemModel.nameModel).search(re)>=0){
              const modalItem = document.createElement('div');
              modalItem.innerHTML = itemModel.nameModel;
              
              modalItem.addEventListener('click',()=>{
                inputModel.value = modalItem.innerHTML;
                self.getPrice();
                model.removeChild(modal);
              })              
              modal.appendChild(modalItem);
            }
            return true;
          })
        }
        return true;
      })
    }else{
      //take null:
      document.getElementById('money').innerHTML ="$";


      ListCar.map((item,index) => {
        if(item.nameBrand === valueBrand){
          const listModel = item.listModel;
          listModel.map((itemModel)=>{
            const modalItem = document.createElement('div');
            modalItem.innerHTML = itemModel.nameModel;
            
            modalItem.addEventListener('click',()=>{
              inputModel.value = modalItem.innerHTML;
              self.getPrice();
              
              model.removeChild(modal);
            })

            modal.appendChild(modalItem);
            return true;
          })
        }
        //}        
        return true;
      })
    }

  }
  //////////////////////
  //select
  handChangeSelect(event){
    const valueSelect = document.getElementById('select-age').value;
    this.getPrice();

  
  }

  getPrice(){
    const inputBrand = document.getElementById("brand-input").value;
    const inputModel = document.getElementById("model-input").value;
    const valueSelect = document.getElementById("select-age").value;

    const money = document.getElementById("money");
    if(valueSelect !== "Default" && inputBrand !== "" && inputModel !== ""){
      ListCar.map((brand,index) => {
        if(brand.nameBrand === inputBrand){
          const listModel = brand.listModel;
          listModel.map((itemModel)=>{
            if(itemModel.nameModel === inputModel){
              const arrayPrice = itemModel.price;
              switch (valueSelect) {
                case "under_5":
                  money.innerHTML = arrayPrice[0] + "$";
                  break;
                case "under_10":
                    money.innerHTML = arrayPrice[1] + "$";
                  break;
                case "than_10":
                    money.innerHTML = arrayPrice[2] + "$";
                  break;
              }
              console.log(arrayPrice);
              return;
            }
          })
        }
      })
    }
    

  }

  clickOutPage(){
    //Brand
    const inputBrand = document.getElementById('brand-input');
    inputBrand.addEventListener('blur',(event)=>{
      setTimeout(() => {
        const brand = document.getElementById('brand');
        const modal = document.getElementById('modal-brand');
        if(modal){
          brand.removeChild(modal);
        }
      }, 200);
    })
    //
    const inputModel = document.getElementById('model-input');
    inputModel.addEventListener('blur',(event)=>{
      setTimeout(() => {
        const model = document.getElementById('model');
        const modal = document.getElementById('modal-model');
        if(modal){
          model.removeChild(modal);
        }
      }, 200);
    })
  }
  
  
  componentDidMount() {
    document.addEventListener('mousedown',this.hideModalBrand);
    document.addEventListener('mousedown',this.hideModalModel);
    //this.createModalBrand();
    
    this.clickOutPage();

   
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown',this.hideModalBrand)
    document.removeEventListener('mousedown',this.hideModalModel);

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
                  <input name="txtBrand" onChange={(event)=>this.inputBrandChange(event)} onClick={()=>this.createModalBrand()} id="brand-input" type="text" placeholder="Brand"/>

                </div>
                <div className="model" id="model" ref={this.setModelModal}>
                  <input name="txtModel" type="text" placeholder="Model" id="model-input" onChange={(event)=>this.inputModelChange(event)} onClick={()=>this.createModalModel()}/>

                </div>
                <div className="age-year">
                  <select onChange={(event)=>this.handChangeSelect(event)} name="txtAge" id="select-age" defaultValue={"Default"}>
                    <option value="Default" disabled>Age of car</option>
                    <option value="under_5">0-5 year old</option>
                    <option value="under_10">6-10 year old</option>
                    <option value="than_10">10+ year old</option>
                  </select>
                </div>
              </div>
              <div className="submit-data">
                <div className="symol-money">
                  <span id="money">$</span>
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

  //