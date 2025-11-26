function ColorCard({ title, value, type }) {
    const copy = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-4 color-code">
            <p className="text-sm text-gray-500 mb-2">{title}</p>
            <div className="flex items-center justify-between">
                <p className="text-xl font-mono font-bold text-gray-800">{value}</p>
                <button
                    onClick={copy}
                    className="copy-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center"
                >
                    <i className="fas fa-copy mr-2"></i> Copy
                </button>
            </div>
        </div>
    );
}

export default ColorCard
