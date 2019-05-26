import React, { Component } from 'react'
import {Card,Button,Modal} from 'antd';
import './ui.less';
export default class Tips extends Component {
  constructor(){
    super();
    this.state={
      showModal1:false,
      showModal2:false,
      showModal3:false,
      showModal4:false,
      confirmLoading:false,
      visible:false,
      ModalText:'点击提交'
    }
  }
  info(){
    Modal.info({
      title:'Notice',
      content: (
       <div>
         <p>Hellow</p>
       </div>
      ),
      onOk(){},
    })
  }
  //重点
  countClose(){
    let count=3;
    const modal=Modal.success({
      title:'Notice that',
      content:'确认将在3秒内关闭'
    });
    const time=setInterval(()=>{
      count -=1;
      modal.update({
        content:`确认将在 ${count}秒内关闭`
      });
    },1000);
    setTimeout(()=>{
      clearInterval(time);
      modal.destroy();
    },count*1000);
  }
  //异步关闭
  //同步的方式写异步
waitClose=()=>{
  this.setState({
    ModalText:'即将关闭对话',
    confirmLoading:true,
  });
  setTimeout(()=>{
    this.setState({
      visible:false,
      confirmLoading:false,
    })
  },2000)
}
  showModal=()=>{
      this.setState({
      visible:true
    })
  }
  //showtips
  showTips(type){
    this.setState({
   [type]:true
    })
  }
 /*  closeTips(type){
    this.setState({
      [type]:false
    })
  } */
 /*  cancelTips(type){
    this.setState({
      [type]:false
    })
  } */
  countClose=this.countClose.bind(this);
  info=this.info.bind(this);
  showTips=this.showTips.bind(this);
 // closeTips=this.closeTips.bind(this);
  /* cancelTips=this.cancelTips.bind(this); */
  render() {
    const showModal1=this.state.showModal1;
    const showModal2=this.state.showModal2;
    const showModal3=this.state.showModal3;
    const showModal4=this.state.showModal4;
    const visible=this.state.visible;
    const confirmLoading=this.state.confirmLoading;
    const ModalText=this.state.ModalText;
    let {showTips,showModal,/* closeTips ,cancelTips*/info,countClose,waitClose}=this;
    return (
      <div>
        <Card title="模态框" className="card-wrap">
          <Button type="primary" onClick={()=>showTips('showModal3')}>自定义</Button>
           <Button onClick={()=>showTips('showModal1')}>顶部</Button>{/* 传递参数写法 事件名={()=>this.自定义函数名(传递的参数或方法)} */}
           <Button type="primary" onClick={()=>showTips('showModal2')} >水平垂直居中</Button>
          <Button type="primary" onClick={()=>showTips('showModal4')}>Open</Button> 
          </Card>
          <Card title="单选" className="card-wrap">
          <Button type="primary" onClick={info}>Notice</Button>
           <Button onClick={countClose}>点击事件</Button>{/* 传递参数写法 事件名={()=>this.自定义函数名(传递的参数或方法)} */}
           <Button type="primary"onClick={showModal}>异步关闭</Button>
          <Button type="primary">Open</Button> 
          </Card>
          <Modal
         title="Sure?"
         visible={showModal1}
         okText="好的"
         cancelText="算了"
        /*  onOk={closeTips}可以用作提交并返回 */
         onCancel={()=>{
           this.setState({
               showModal1:false
           })
         }}
         
         >
             <p>Hellow,Javis</p>
         </Modal> 
         <Modal 
         centered={true}
         title="Hellow"
         visible={showModal2}
         okText="确定"
         cancelText="取消"
         onCancel={()=>{
           this.setState({
             showModal2:false
           })
         }}
         >
           <p>你好</p>
         </Modal>
         <Modal 
         title="居中了吗"
        
         visible={showModal3}
         okText="是的"
         cancelText="不是"
         onCancel={()=>{
           this.setState({
             showModal3:false
           })
         }}
        
         >
          <p>Hellow,Javis</p>
         </Modal>
         <Modal
         style={{top:20}}
         title="打开"
         visible={showModal4}
         onCancel={
           ()=>{
             this.setState({
               showModal4:false
             })
           }
         }
         >
          <p>Hellow,Javis</p>
         </Modal>
       <Modal
       title="提交"
       visible={visible}
       onOk={waitClose}
       confirmLoading={confirmLoading}
       onCancel={()=>{
         this.setState({
           showModal5:false
         })
       }}

       >
       <p>{ModalText}</p>
       </Modal>
      </div>
    )
  }
}
