function ColorPalette({ color }) {
    const [r, g, b] = color.rgb.match(/\d+/g).map(Number);

    const colors = [
        `rgb(${r},${g},${b})`,
        `rgb(${(r + 128) % 256},${g},${(b + 128) % 256})`,
        `rgb(${r},${(g + 128) % 256},${(b + 128) % 256})`,
        `rgb(${(r + 128) % 256},${(g + 128) % 256},${b})`,
        `rgb(${255 - r},${255 - g},${255 - b})`,
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <p className="text-sm text-gray-500 mb-3">Color Palette</p>
            <div className="flex justify-between h-4">
                {colors.map((c, i) => (
                    <div
                        key={i}
                        className="color-palette w-1/5"
                        style={{ backgroundColor: c }}
                    ></div>
                ))}
            </div>
        </div>
    );
}


export default ColorPalette