import * as React from 'react';

interface Props {
    size?: number;
    thickness?: number;
}

export const CircularProgress: React.SFC<Props> = (props: Props) => {
    const { size, thickness } = props;
    const radius: number = (size / 2.0);
    const r: number = (radius - thickness / 2.0);
    const viewBox: string = `0 0 ${size} ${size}`;
    const strokeMiterlimit: number = 20;

    return (
        <svg viewBox={viewBox} width={size} height={size}>
            <circle
                cx={radius}
                cy={radius}
                r={r}
                fill="none"
                strokeWidth={thickness}
                strokeMiterlimit={`${strokeMiterlimit}`}
            />
        </svg>
    );
};

CircularProgress.displayName = 'CircularProgress';

CircularProgress.defaultProps = {
    size: 80,
    thickness: 5
};
