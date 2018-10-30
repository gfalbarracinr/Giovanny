import React, { Component } from 'react'
import FirstItem from '../presentational/items/FirstItem';
import LastItem from '../presentational/items/LastItem';
import GeneralItem from '../presentational/items/GeneralItem';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
          itemsArray: [],
          firstItem: {},
          lastItem: {},
          language: ''
        }
    };
    
    componentWillMount(){
      var itemsArray = Array.from(this.props.items).reverse();
      var firstItem = itemsArray.pop().node;
      var lastItem = itemsArray.shift().node;
      this.setState({ itemsArray, firstItem, lastItem});
    }
    componentDidUpdate(prevProps) {
      if (prevProps.items !== this.props.items) {
        var itemsArray = Array.from(this.props.items).reverse();
        var firstItem = itemsArray.pop().node;
        var lastItem = itemsArray.shift().node;
        this.setState({ itemsArray, firstItem, lastItem});
      }
    }
    
    render(){
      let {firstItem, lastItem, itemsArray} = this.state
      return(

          <div>
            <FirstItem 
              year={firstItem.year} 
              institution={firstItem.institution} 
              degree={firstItem.degree}
            />
            {          
              itemsArray.map((item, index) => (
                <GeneralItem 
                  key={ index } 
                  year={item.node.year} 
                  institution={item.node.institution} 
                  degree={item.node.degree}
                />
              ))
              
            }
            <LastItem 
              year={lastItem.year} 
              institution={lastItem.institution} 
              degree={lastItem.degree}
            />
          </div>
      )
    }
    
}

export default Item
