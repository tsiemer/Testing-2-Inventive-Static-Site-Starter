import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


function getSubItems(data, url){
    let items = [];
    let counter = 0;

    for(let item of data){
        items.push(
            <DropdownItem key={counter} href={`/${url}/` + item.sub_nav_link_label[0].text + '/'}>
                {item.sub_nav_link_label[0].text}
            </DropdownItem>
        )
        counter++;
    }

    return items
}

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){
        let { data } = this.props;
        return (
            <div className="Navigation">
            <Navbar color="black" light expand="md">
                <img className="logo" src={data.edges[0].node.logo.url}/>
                <NavbarBrand href="/">{data.edges[0].node.display_name[0].text}</NavbarBrand>

                <Nav className="ml-auto" navbar>
                    { data.edges.map(edge => {
                        let navItems = [];
                            {
                                edge.node.nav.forEach(navItem => {
                                    navItems.push(
                                        <>
                                            {navItem.fields[0].sub_nav_link_label !== null ? (
                                                <Dropdown isOpen={this.state.isOpen} nav>
                                                    <DropdownToggle onClick={() => this.toggle()} > 
                                                        {navItem.primary.label[0].text} 
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        {getSubItems(navItem.fields, 'blogs')}
                                                    </DropdownMenu>
                                                </Dropdown> ) : (
                                                <NavItem>
                                                    <NavLink href={'/' + navItem.primary.label[0].text + '/'}>{ navItem.primary.label[0].text }</NavLink>
                                                </NavItem>)
                                            }
                                        </>
                                    )
                                })
                            }
                            return navItems;
                        })
                    }
                </Nav>
            </Navbar>
        </div>
        )
    }
}
    