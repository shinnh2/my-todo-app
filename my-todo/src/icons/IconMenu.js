import styled from "styled-components";

const MenuSvg = styled.svg`
	width: 20px;
	height: 16px;
	path {
		fill: ${(props) => props.color};
	}
`;

const IconMenu = ({ color }) => {
	return (
		<MenuSvg color={color}>
			<path d="M0.850006 14.881V12.3236H18.85V14.881H0.850006ZM0.850006 9.17611V6.59063H18.85V9.17611H0.850006ZM0.850006 3.44309V0.885712H18.85V3.44309H0.850006Z" />
		</MenuSvg>
	);
};

export default IconMenu;
