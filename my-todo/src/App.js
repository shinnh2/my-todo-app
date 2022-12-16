import styled from "styled-components";
import "./App.css";
import Main from "./Main";

/* PC 부분 */
const Container = styled.div`
	width: 1280px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.pc_desc {
		margin-right: 72px;
		dt {
			text-align: right;
			font-size: 60px;
			font-weight: 500;
			margin-bottom: 16px;
		}
		dd {
			text-align: right;
			line-height: 38px;
			font-size: 24px;
		}
	}
`;

/* Contents 부분 */

const Mockup = styled.div`
	width: 380px;
	height: 640px;
	border: 4px solid #515256;
	box-shadow: 10px 10px 24px 14px rgba(203, 203, 203, 0.34);
	border-radius: 16px;
	overflow: hidden;
`;

function App() {
	return (
		<Container>
			<dl className="pc_desc">
				<dt>TODO App</dt>
				<dd>
					쉽고 간편하게 사용할 수 있어요. <br />
					컬러태그를 사용해
					<br />할 일을 쉽게 구분해 보세요.
				</dd>
			</dl>
			<Mockup>
				<Main />
			</Mockup>
		</Container>
	);
}

export default App;
