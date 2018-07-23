import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 500px) {
        margin-right: 0;
        
    }
`

class BubbleChartClass extends Component {
    constructor(props){
        super(props);
        this.state={
            mobile: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({mobile: window.innerWidth <= 560});
    }
    render () {
        const BubbleChart = require("@weknow/react-bubble-chart-d3");
        return(
            <Wrapper>
                <BubbleChart
                    graph= {{
                        zoom: 1,
                        offsetX: 0,
                        offsetY: 0,
                    }}
                    width = { this.state.mobile ? '250' : '400' }
                    height = { this.state.mobile ? '250' : '400' }
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

export default BubbleChartClass;