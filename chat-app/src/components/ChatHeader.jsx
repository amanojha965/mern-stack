import { Phone, Video, Search, Bell, Info, MoreVertical } from "lucide-react";

export default function ChatHeader({ contact }) {
    const name = contact?.name || "Sarah Johnson";
    const online = contact?.online ?? true;
    const avatar = contact?.avatar || null;
    const color = contact?.color || "#2980b9";

    const actions = [
        { icon: Phone, label: "Voice Call" },
        { icon: Video, label: "Video Call" },
        { icon: Search, label: "Search" },
        { icon: Bell, label: "Mute" },
        { icon: Info, label: "Info" },
        { icon: MoreVertical, label: "More" },
    ];

    return (
        <header className="chat-header">
            {/* Left: Avatar + Name/Status */}
            <div className="chat-header-left">
                <div className="chat-header-avatar-wrap">
                    {avatar ? (
                        <img src={avatar} alt={name} className="chat-header-avatar" />
                    ) : (
                        <div className="chat-header-avatar" style={{ background: color }}>
                            {name[0]}
                        </div>
                    )}
                    {online && <span className="chat-header-online-dot" />}
                </div>
                <div className="chat-header-info">
                    <span className="chat-header-name">{name}</span>
                    <span className={`chat-header-status ${online ? "online" : "offline"}`}>
                        {online ? "● Online" : "● Offline"}
                    </span>
                </div>
            </div>

            {/* Right: Icon Actions */}
            <div className="chat-header-actions">
                {actions.map(({ icon: Icon, label }) => (
                    <button key={label} className="chat-header-icon-btn" title={label}>
                        <Icon size={18} strokeWidth={1.6} />
                    </button>
                ))}
            </div>
        </header>
    );
}