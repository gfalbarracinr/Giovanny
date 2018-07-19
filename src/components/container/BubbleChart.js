import React, { Component } from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import styled from 'styled-components';
import {withGetScreen} from 'react-getscreen';

const Wrapper = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 500px) {
        margin-right: 0;
        margin-left: 0;
    }
`

class BubbleChartClass extends Component {
    constructor(props){
        super(props);
        this.state={
            media: 400
        }
    }
    componentDidMount(){
        if (this.props.isMobile()){
            this.setState({ media: 250 })
        }
    }
    render () {
        return(
            <Wrapper>
                <BubbleChart
                    graph= {{
                        zoom: 1,
                        offsetX: 0,
                        offsetY: 0,
                    }}
                    width = { this.state.media }
                    height = { this.state.media }
                    showLegend={false} 
                    legendPercentage={0} 
                    legendFont={{
                            family: 'Arial',
                            size: 12,
                            color: '#000',
                            weight: 'bold',
                        }}
                    valueFont={{
                            family: 'Arial',
                            size: 12,
                            color: '#4AB3F4',
                            weight: 'bold',
                        }}
                    labelFont={{
                            family: 'Arial',
                            size: 16,
                            color: 'white',
                            weight: 'bold',
                        }}
                    bubbleClickFunc={()=>{}}
                    legendClickFun={()=>{}}    
                    data={ this.props.data }
                />
            </Wrapper>
        );
    }
}

export default withGetScreen(BubbleChartClass);