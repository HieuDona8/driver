import React, { Component } from 'react';
import './ChildAsk.css'
import listAsk from './../Ask.json'

class ChildAsk extends Component {
  constructor(props) {
    super(props);
    
    this.state=({
      idItem  : "ask-item-" + this.props.num,
      idModal : "modal-text-" + this.props.num,
      isOpenning  : false
    })
  }
  
  autoOpen(){
    const modal = document.getElementById(this.state.idModal);

    for(let i = 0; i < listAsk.length; i++){
      const idModalTemp = "modal-text-"+i;
      const modalTemp = document.getElementById(idModalTemp);
      modalTemp.style.display = "none";

    }

    const isOpenning = this.state.isOpenning;
    this.setState({
      isOpenning : !isOpenning
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const modal = document.getElementById(this.state.idModal);
    if(nextState.isOpenning === true){
      modal.style.display = "block";
    }else{
      modal.style.display = "false";
    }
    return true;
  }
  
  componentDidMount() {
    document.getElementById(this.state.idItem).addEventListener("click",(event)=>this.autoOpen())
  }
  
  render() {
    return (
      <div className="ask-item" id={"ask-item-" + this.props.num}>
        <div className="ask-title">
          <span>{this.props.title}</span>
        </div>
        <div className="modal-text" id={"modal-text-"+this.props.num}>
          <span>
            {this.props.text}
          </span>
        </div>
      </div>
    );
  }
}

export default ChildAsk;