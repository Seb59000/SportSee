export const daysNumbers = (data) => {
    return data.map((session, index) => index + 1);
}

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip-label">{`${payload[0].value}Kg`}</p>
                <p className="tooltip-label">{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }
    return null;
};