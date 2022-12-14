import styled from "styled-components";

const CloseSvg = styled.svg`
	width="14" 
    height="14" 
    fill:none;
    
    path {
		fill: #1c1b1f;
	}
`;

const IconClose = () => {
	return (
		<CloseSvg viewBox="0 0 14 14">
			<path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" />
		</CloseSvg>
	);
};
export default IconClose;
