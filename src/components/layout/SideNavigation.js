import React, { Component } from 'react'

// Comment

export class SideNavigation extends Component {
    render() {
        return (
            
            <div>
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Issue Tracker</div>
                </a>

                
                <hr class="sidebar-divider my-0" />

                
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                </li>

                
                <hr class="sidebar-divider" />

                
                <div class="sidebar-heading">
                    Interface
                </div>

                
                <li class="nav-item">
                    <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                    </a>
                </li>

                
                <li class="nav-item">
                    <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                    </a>
                </li>

                
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
