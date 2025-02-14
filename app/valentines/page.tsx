import LoveList from "../components/iloveyoulist";

export default function Valentines() {
    return (
        <div
            className="bg-pink-200 flex justify-center items-center h-screen"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex items-center gap-4">
                {/* Flowers Image */}
                <img 
                    src="/flowers.png" 
                    alt="Flowers" 
                    className="h-80 w-auto object-contain" // 2x size
                />

                {/* Love List Component */}
                <LoveList />
            </div>
        </div>
    );
}
