import React, { Component } from 'react'
import FirstItem from '../presentational/items/FirstItem';
import LastItem from '../presentational/items/LastItem';
import GeneralItem from '../presentational/items/GeneralItem';

class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
          itemsArray: []
        }
      }
  
      componentDidMount(){
        let aux = this.fixArray()
        this.setState({itemsArray: aux})
      }
    render(){
      const {first, last} = this.props 
      return(

          <div>
            <FirstItem year={first.year} institution={first.institution} degree={first.degree}/>
            {          
              this.state.itemsArray.map((item, index) => (
                <GeneralItem key={ index } year={item.node.year} institution={item.node.institution} degree={item.node.degree}/>
              ))
              
            }
            <LastItem year={last.year} institution={last.institution} degree={last.degree}/>
          </div>
      )
    }

    fixArray = () =>{
        let aux = Array.from(this.props.items);
        aux.pop();
        aux.shift();
        return aux;
    }
}

export default Item
