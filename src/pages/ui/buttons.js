import React, { Component } from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.less'
export default class Buttons extends Component {
  constructor(){
    super();
    this.state={
    loading:true,
    size:'default'
    //实现切换按钮大小
    //首先设定默认状态

  }

  }
  onChangeSize=this.onChangeSize.bind(this);
  onLoading=this.onLoading.bind(this);
  onhanddleClick=this.onhanddleClick.bind(this);
  onhanddleClick(){
    this.setState(
      {
        loading:false
      }
    )
    
  }
  onLoading(){
    this.setState({
      loading:true
    })
  }
  onChangeSize(e){
    //事件监听
    //size
    this.setState({
      size:e.target.value
    })
  }
 
  render() {
    const loading=this.state.loading;
    const size=this.state.size;
    let {onhanddleClick,onLoading,onChangeSize}=this;
    //解构 
    return (
    <div>
         <Card title="基础按钮" className="card-wrap">
           <Button type="primary">
             主按钮
           </Button>
           <Button type="danger">危险按钮</Button>
           <Button type="dashed">Hide</Button>
           <Button type="default">Default</Button>
           <Button type="ghost">Ghost</Button>
           <Button type="link">Link</Button>
           <Button disabled>没有权限</Button>
         </Card>
         <Card title="图标按钮" className="card-wrap">
           <Button icon="plus" type="primary">创建</Button>
           <Button icon="edit">编辑</Button>
           <Button icon="delete">删除</Button>
           <Button icon="search"shape="circle"></Button>
           <Button icon="search" type="primary">搜索</Button>
           <Button icon="download" type="primary">下载</Button>
           <Button icon="alert" shape="circle"></Button>
         </Card>
         <Card title="Loding加载" className="card-wrap">
           <Button type="primary" loading={loading}>确定</Button>
           <Button shape="circle" loading={loading} type="primary"></Button>
           <Button onClick={onLoading} loading={loading}>点击加载</Button>
           <Button shape="circle"loading={loading}></Button>
           <Button type="primary" onClick={onhanddleClick}>关闭</Button>
         </Card>
         <Card title="翻页按钮">
           <Button icon="left">上一页</Button>
          {/* 可以点击加载页面 */}
          <Button icon="right">下一页</Button>
         </Card>
         <Card title="按钮大小" className="card-wrap">
           <Radio.Group onChange={onChangeSize}>
             <Radio value="large">Large</Radio>
             <Radio value="default">Default</Radio>
             <Radio value="small">Small</Radio>
           </Radio.Group>
           <Button.Group size={size}>
             <Button type="primary">
             主按钮
           </Button>
           <Button type="danger">危险按钮</Button>
           <Button type="dashed">Hide</Button>
           <Button type="default">Default</Button>
           <Button type="ghost">Ghost</Button>
           <Button type="link">Link</Button>
           <Button disabled>没有权限</Button>
           <Button icon="cloud"></Button>
           <Button icon="cloud-download"></Button>
           </Button.Group>
         
         </Card>
    </div>
    )
  }
}
