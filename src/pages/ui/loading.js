import React,{Component} from 'react';
import { Spin, Card } from 'antd';
class Loading extends Component{
    render(){
        return(
         <Card title="加载">
          <Spin />   
          <Spin size="large"/>
          
         </Card>
        );
    }
}
export default Loading;