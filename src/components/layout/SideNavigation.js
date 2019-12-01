import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class SideNavigation extends Component {
    render() {
        return (
            
            <div>
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
                {/* Logo and Name */}
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Issue Tracker</div>
                </a>

                {/* Divider */}
                <hr class="sidebar-divider my-0" />

                
                <li class="nav-item active">
                    <Link className="nav-link" to="/dashboard">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr class="sidebar-divider" />

                
                <div class="sidebar-heading">
                    Issues
                </div>

                
                <li class="nav-item">
                    <Link className="nav-link" to="/tickets">
                        <i class="fas fa-fw fa-file-alt"></i>
                        <span>Tickets</span>
                    </Link>
                </li>

                
                <li class="nav-item">
                    <Link className="nav-link" to="/projects">
                        <i class="fas fa-fw fa-star"></i>
                        <span>Projects</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr class="sidebar-divider" />

                
                <div class="sidebar-heading">
                    Addons
                </div>

                
                <li class="nav-item">
                    <a className="nav-link" href="index.html">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                    </a>
                </li>

                
                <li class="nav-item">
                    <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
                </li>

                
                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
                </li>

                
                <hr class="sidebar-divider d-none d-md-block" />

                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                </ul>
            </div>
        )
    }
}

export default SideNavigation
