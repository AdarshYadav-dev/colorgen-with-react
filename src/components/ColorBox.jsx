function ColorBox({ hex }) {
    return (
        <div
            className="w-full h-64 rounded-2xl color-display transition-colors duration-500 mb-6 flex items-center justify-center"
            style={{ backgroundColor: hex }}
        >
            <div className="text-center p-4 rounded-2xl glass">
                <p className="text-lg font-medium text-white drop-shadow-md">
                    Current Color
                </p>
                <p className="text-2xl font-bold text-white drop-shadow-md mt-1">
                    {hex}
                </p>
            </div>
        </div>
    );
}

export default ColorBox
