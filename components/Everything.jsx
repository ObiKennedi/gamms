import "../styles/Everything.scss"

const features = [
    {
        id: 1,
        icon: "/Frame (1).png",
        title: "Member Management",
        writeUp: "Assign roles, track activity, and manage your entire community from one powerful dashboard."
    },
    {
        id: 2,
        icon: "/Frame (2).png",
        title: "Community Laws",
        writeUp: "Built-in governance tools for order, safety, and transparent decision-making."
    },
    {
        id: 3,
        icon: "/Frame (3).png",
        title: "Leaderboards",
        writeUp: "Reward engagement and spotlight top contributors to keep your community thriving."
    },
    {
        id: 4,
        icon: "/Frame (4).png",
        title: "Real-time Chatrooms",
        writeUp: "Host focused discussions by topic, event, or department with instant messaging."
    },
    {
        id: 5,
        icon: "/Frame (5).png",
        title: "Polls & Elections",
        writeUp: "Secure, transparent voting for leadership decisions and community polls."
    },
    {
        id: 6,
        icon: "/Frame (7).png",
        title: "Education Hub",
        writeUp: "Host courses, workshops, and events with attendance tracking and certificates."
    },
]

export const Everything = () => {
    return (
        <div className="everything">
            <h2>Everything your community needs  in one place</h2>
            <p>From seamless management to active engagement, Gamms gives you every tool to build, grow, and sustain a thriving community.</p>
            <div>
                {features.map(item => (
                    <div key={item.id}>
                        <div>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.writeUp}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}