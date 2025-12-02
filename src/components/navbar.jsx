import React, { Component } from 'react';

class MyNavbar extends Component {
    render() {
        return (
            <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl border-b border-gray-700">
                <div className="container mx-auto px-6 py-5">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">🎵</span>
                        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Song Hunter
                        </h1>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MyNavbar;