import styled from "styled-components";

const PlusSvg = styled.svg`
	width: 14px;
	height: 14px;
	fill: none;

	path {
		fill: #fff;
	}
`;

const IconPlus = () => {
	return (
		<PlusSvg viewBox="0 0 14 14">
			<path d="M6 14V8H0V6H6V0H8V6H14V8H8V14H6Z" />
		</PlusSvg>
	);
};
export default IconPlus;
