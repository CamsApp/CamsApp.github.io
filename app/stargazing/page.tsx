import Countdown from "../components/CountdownDating"

export default function Stargazing() {
    return (
        <div
            style={{
                backgroundImage: 'url(/stargazing.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', // Full viewport height
                color: 'white', // Optional, to make the text stand out
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                flexDirection: 'column', // Stack elements vertically
                textAlign: 'center', // Center text inside elements
            }}
        >
            <Countdown />
        </div>
    );
}
