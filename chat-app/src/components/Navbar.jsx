import React from "react";
import "../index.css";

import { useState } from "react";
import { MessageCircle, FolderOpen, Bell, Archive, Zap, Settings } from "lucide-react";

export default function Navbar() {
    const [activeNav, setActiveNav] = useState(0);
    const [notifCount] = useState(3);

    const navItems = [
        { icon: MessageCircle, label: "Messages" },
        { icon: FolderOpen, label: "Files" },
        { icon: Bell, label: "Notifications", badge: notifCount },
        { icon: Archive, label: "Archived" },
    ];

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <Zap size={18} strokeWidth={2.5} fill="#fff" color="#fff" />
            </div>

            {/* Nav Items */}
            <ul className="navbar-nav">
                {navItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <li key={i}>
                            <button
                                className={`navbar-nav-btn${activeNav === i ? " navbar-nav-btn--active" : ""}`}
                                onClick={() => setActiveNav(i)}
                                title={item.label}
                            >
                                <Icon size={20} strokeWidth={activeNav === i ? 2.5 : 1.8} />
                                {item.badge > 0 && (
                                    <span className="navbar-nav-badge">{item.badge}</span>
                                )}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Bottom: Settings + Avatar */}
            <div className="navbar-bottom">
                <button className="navbar-nav-btn" title="Settings">
                    <Settings size={20} strokeWidth={1.8} />
                </button>
                <div className="navbar-avatar" title="Profile">R</div>
            </div>
        </nav>
    );
}