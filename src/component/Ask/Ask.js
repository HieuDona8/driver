import React, { Component } from 'react';
import './Ask.css';
import ListAsk from './Ask.json';
import ChildAsk from './ChildAsk/ChildAsk';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      singleOpen : false
    });
  }
  
  // openSingleModal(indexOpen){
  //   ListAsk.map((item,index)=>{
  //     if(indexOpen === index){

  //     }
  //   })
    
  // }
  //onClick={(index)=>this.openSingleModal(index)}


  render() {
    return (
      <section className="ask">
        <div className="ask-content">
          <div className="list-title">
            <span>You ask we answer</span>
          </div>
          <div className="list-ask">
            {
              ListAsk.map((item,index)=>{
                return <ChildAsk key={index} num={index} title={item.ask} text={item.ans}></ChildAsk>
              })
            }
          </div>        
        </div>        
      </section>
    );
  }
}

export default Ask;