export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="lineChart-tooltip">
                <p className="tooltip-label">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

export const CustomTick = ({ index, x, y }) => {
    switch (index) {
        case 0:
            return (
                <text x={x + 10} y={y + 20} fill='#f0bab4'>
                    L
                </text>
            );
        case 1:
            return (
                <text x={x + 5} y={y + 20} fill='#f0bab4'>
                    M
                </text>
            );
        case 2:
            return (
                <text x={x} y={y + 20} fill='#f0bab4'>
                    M
                </text>
            );
        case 3:
            return (
                <text x={x - 5} y={y + 20} fill='#f0bab4'>
                    J
                </text>
            );
        case 4:
            return (
                <text x={x - 10} y={y + 20} fill='#f0bab4'>
                    V
                </text>
            );
        case 5:
            return (
                <text x={x - 15} y={y + 20} fill='#f0bab4'>
                    S
                </text>
            );
        case 6:
            return (
                <text x={x - 20} y={y + 20} fill='#f0bab4'>
                    D
                </text>
            );
        default:
            break;
    }
};