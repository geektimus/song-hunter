import React, { Component } from 'react';

class MyNavbar extends Component {
    render() {
        return (
            <nav className="bg-gray-800 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="text-xl font-bold">Song Hunter</div>
                </div>
            </nav>
        );
    }
}

export default MyNavbar;