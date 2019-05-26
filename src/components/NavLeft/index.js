import React, { Component } from 'react'
import MenuConfig from '../../config/menuConfig'
import '../NavLeft/Style.less';
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {
componentWillMount(){
 const menuTreeNode=this.renderMenu(MenuConfig);
 this.setState({
   menuTreeNode
 })
}
//菜单渲染
renderMenu=(data)=>{
return data.map((item)=>{
  if(item.children){
    return (
      <SubMenu title={item.title} key={item.key}>
    {this.renderMenu(item.children)}
      </SubMenu>
    )
    
  }
  return <Menu.Item title={item.title} key={item.key}>
    <NavLink to={item.key}>
    {item.title}
    </NavLink>
  </Menu.Item>
})
}

  render() {
     
    return (
      <div className="nav-left">
        <NavLink to="/admin/home">
           <div className='logo'>
      <img src='/assets/logo-ant.svg' alt='' className='logo'/>
      <h1>Manage</h1>
      </div>
        </NavLink>
     
   <Menu
   theme='dark'//此处可以设定状态以及icon font
   >
   { this.state.menuTreeNode }
    </Menu>
   </div>

 
    )//遇到问题，如何循环遍历文件中的模板
  }
}
