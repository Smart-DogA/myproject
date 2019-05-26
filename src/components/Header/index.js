import React ,{Component} from 'react';
import {Row,Col} from 'antd'
import './Style.less'
import Util from '../../utils/util'
import axios from '../../axios/axios'
class Header extends Component {
    state={}
    componentWillMount(){
        this.setState({
            userName:'Admin'
        })
        setInterval(()=>{
            //moment
            let getTime = Util.formatDate(new Date().getTime());
            this.setState({
                getTime
            })
        },1000)
        this.getWeather();
    }
    getWeather(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    
    render(){
        return(
         <div className="header">
             <Row className="header-top">
                 <Col span="24">
                 <span>欢迎..{this.state.userName}</span>
                 <a href="/">退出</a>
                 </Col>
             </Row>
             <Row className="index">
                 <Col span="4" className="title">首页
                 </Col>
                 <Col span="20" className="weather">
                 <span className="date">{this.state.getTime}</span>
                 <span className="weather-img">
                <img src={this.state.dayPictureUrl} alt="" />
                </span>
                 <span className="weather-detail">{this.state.weather}</span>
                 </Col>
             </Row>
         </div>
        )
    }
}
export default Header;
