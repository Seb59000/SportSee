import { Text } from 'recharts';
import types from '../../data/types.json'

export const CustomTick = ({ index, x, y, cx, cy }) => {
    let xTransformed
    if (x < 60) {
        if (y < 200) {
            xTransformed = x - 28;

        } else {
            xTransformed = x - 32;
        }
    } else if (x > 50 && x < 170) {
        xTransformed = x - 20;
    } else if (x > 170) {
        if (y < 100) {
            xTransformed = x - 20;

        } else {
            xTransformed = x - 32;
        }
    }

    let yTransformed
    if (y < 40) {
        yTransformed = y - 15;
    }
    else if (y < 100) {
        yTransformed = y - 20;
    } else if (y >= 100 && y < 180) {
        yTransformed = y + 20;
    } else {
        yTransformed = y + 15;
    }

    return (
        <Text verticalAnchor="middle"
            y={yTransformed}
            x={xTransformed}
            fontSize={15} fill='white'>
            {types.type[index]}
        </Text>
    );
};