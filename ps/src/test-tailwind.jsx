function TestTailwind() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 p-8">
            <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-2xl">
                🎉 TAILWIND FIXED!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                {/* Red Card */}
                <div className="bg-red-500 hover:bg-red-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-4">bg-red-500</h2>
                    <p>✅ Hover works</p>
                </div>
                {/* Pink Card */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-4">Gradient</h2>
                    <p>✅ Colors apply</p>
                </div>
                {/* Blue Card */}
                <div className="bg-blue-500 hover:bg-blue-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-4">text-white</h2>
                    <p>✅ Flex/Grid working</p>
                </div>
            </div>
            <div className="mt-12 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-2xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Login Demo Below 👇</h3>
            </div>
        </div>
    );
}

export default TestTailwind;

