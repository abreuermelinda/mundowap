import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import iconeUsuario from '../../assets/icone_usuario.png';

const Header = () => (
    <Navbar color="primary navbar-dark" light expand="md">
        <Link className="navbar-brand" to="/dashboard">Mundo Wap</Link>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <img className="rounded-circle mt-2" src={iconeUsuario} width="20" height="20" alt="Usuario" />
            </NavItem>
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link menu-header" caret>
                    Usuário
                </DropdownToggle>
                <DropdownMenu right>
                    <Link className="dropdown-item" to="/perfil">Perfil</Link>
                    <DropdownItem>Sair</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    </Navbar>
);

export default Header;