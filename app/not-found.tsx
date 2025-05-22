"use client";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
            <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 animate-bounce">
                404
            </div>
            <h1 className="mt-4 text-3xl font-bold text-gray-800">
                Oops! You tripped over a missing page.
            </h1>
            <p className="mt-2 text-lg text-gray-600">
                Looks like this page went on a trip and got lost. <span className="inline-block animate-spin">🧳</span>
            </p>
            <a
                href="/"
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
            >
                <span>Take me home</span>
                <span role="img" aria-label="house">🏠</span>
            </a>
            <div className="mt-10 text-6xl animate-wiggle">
                🏖️
            </div>
            <style jsx>{`
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-5deg); }
                    50% { transform: rotate(5deg); }
                }
                .animate-wiggle {
                    animation: wiggle 1s infinite;
                }
            `}</style>
        </div>
    );
}