import styled from "styled-components";
import IconMenu from "../icons/IconMenu";

const HeaderTag = styled.header`
	position: relative;
	width: 100%;
	height: 64px;

	button {
		position: absolute;
		left: 0;
		top: 16px;
		width: 24px;
		height: 24px;
		margin: 0 16px;
	}
	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 20px;
		font-weight: var(--font-medium);
	}
`;

const Header = () => {
	return (
		<HeaderTag>
			<button>
				<IconMenu color={"var(--main-black-color)"} />
			</button>
		</HeaderTag>
	);
};
export default Header;
