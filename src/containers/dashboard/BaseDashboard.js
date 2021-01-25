import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import '../../styles/dashboard/index.css'

class BaseDashboard extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="d-flex">
                    <Sidebar />
                    <div className="content p-1">
                        <div className="list-group-item">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BaseDashboard;