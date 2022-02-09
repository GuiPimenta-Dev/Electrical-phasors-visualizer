import React from 'react';

const LineWithArrow = ({ color, coords, id }) => {
	return (
		<>
			<defs>
				<marker
					id={id}
					markerWidth='6'
					markerHeight='10'
					refX='2'
					refY='1.5'
					orient='auto'
					stroke={color}
					fill={color}>
					<polygon points='0 0.5, 2 1.5, 0 2.5' />
				</marker>
			</defs>

			<line
				x1={coords.x1}
				y1={coords.y1}
				x2={coords.x2}
				y2={coords.y2}
				stroke={color}
				strokeLinecap='round'
				strokeWidth='2'
				markerEnd={`url(#${id})`}
			/>
		</>
	);
};

export default LineWithArrow;
