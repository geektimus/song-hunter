import React, { Component } from 'react';
import ThemeSwitcher from './theme-switcher';

class MyNavbar extends Component {
    render() {
        return (
            <nav className="theme-navbar shadow-xl border-b" style={{ borderColor: 'var(--color-border-dark, #374151)' }}>
                <div className="container mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🎵</span>
                            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Song Hunter
                            </h1>
                        </div>
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
        );
    }
}

export default MyNavbar;