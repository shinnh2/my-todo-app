import { useState } from "react";
import styled from "styled-components";
import IconClose from "../icons/IconClose";

const ModalWrap = styled.article`
	width: 280px;
	min-height: 140px;
	padding: 0 24px;
	margin: 0 auto;
	background: #fff;
`;

const ModalHeader = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.modal_title {
		font-size: var(--font-sub_tit);
		font-weight: var(--font-medium);
	}
	button {
		width: 24px;
		height: 24px;
	}
`;

const ModalBody = styled.div`
	width: 100%;

	input[type="text"] {
		width: 100%;
		height: 28px;
		margin-bottom: 16px;
		border-bottom: 1px solid var(--border-black-color);
		font-size: var(--font-body1);
	}
`;

const ButtonArea = styled.div`
	width: 100%;
	padding: 16px 0 18px 0;
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 6px 16px;
		margin-right: 10px;
		min-width: 80px;
		height: 36px;
		border-radius: 4px;
		font-weight: var(--font-medium);
		font-size: var(--font-body1);
	}
	button:last-child {
		margin-right: 0;
	}
	.create {
		background: var(--btn-color);
		color: var(--btn-on-color);
	}
	.update {
		background: var(--btn-color);
		color: var(--btn-on-color);
	}
	.delete {
		border: 1px solid var(--border-black-color);
		background: var(--btn-color-em);
		color: var(--btn-on-em-color);
	}
`;

const ColorPicker = styled.div`
	width: 100%;
	margin-bottom: 16px;
	.colorPicker_head {
		width: 100%;
		height: 36px;
		padding-left: 30px;
		background: url("img/palette.png") no-repeat 0 0;
		background-size: 24px 24px;
		font-size: var(--font-body1);
	}
	.colorPicker_body {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
`;

const Color = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 6px;
	overflow: hidden;
	position: relative;

	input[type="radio"] {
		appearance: none;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		background: ${(props) => props.color};
	}

	input[type="radio"]:checked {
		border: 2px solid var(--border-black-color);
	}

	label {
		font-size: 0;
	}

	.color_none {
		background: url("img/color_none.png") no-repeat center;
		background-size: 20px 20px;
	}
`;

const Modal = ({
	colorList,
	handleClickCreate,
	handleClickDelete,
	handleClickUpdate,
	nowTodo,
	handleClickModalOpen,
	isCreate,
}) => {
	const [todoText, setTodoText] = useState("");
	const [todoColor, setTodoColor] = useState(0);

	const handleChangeTodo = (e) => {
		setTodoText(e.target.value);
	};

	const handleChangeColor = (e) => {
		setTodoColor(e.target.value);
	};

	console.log();
	return (
		<ModalWrap>
			<ModalHeader>
				{isCreate ? (
					<h2 className="modal_title">추가</h2>
				) : (
					<h2 className="modal_title">편집</h2>
				)}
				<button className="btn_close" onClick={handleClickModalOpen}>
					<IconClose />
				</button>
			</ModalHeader>
			<ModalBody>
				<input
					type="text"
					title="할 일 입력"
					id="todoText"
					placeholder="할 일을 입력하세요"
					defaultValue={!isCreate ? nowTodo : ""}
					onChange={handleChangeTodo}
				/>
				<ColorPicker>
					<div className="colorPicker_head">색상 선택</div>
					<div className="colorPicker_body">
						{colorList.map((el, idx) => {
							if (idx === 0) {
								return (
									<Color key={idx}>
										<input
											type="radio"
											className="color_none"
											name="colorChips"
											value={idx}
											onChange={(e) =>
												handleChangeColor(e)
											}
										/>
										<label htmlFor="color_none">
											색상없음
										</label>
									</Color>
								);
							} else {
								return (
									<Color color={colorList[idx]} key={idx}>
										<input
											type="radio"
											id={`color_${idx}`}
											name="colorChips"
											value={idx}
											onChange={(e) =>
												handleChangeColor(e)
											}
										/>
										<label
											htmlFor={`color_${idx}`}
										>{`컬러${idx}`}</label>
									</Color>
								);
							}
						})}
					</div>
				</ColorPicker>
				<ButtonArea>
					{isCreate ? (
						<button
							className="create"
							onClick={(e) =>
								handleClickCreate(todoText, todoColor)
							}
						>
							추가
						</button>
					) : (
						<>
							{" "}
							<button
								className="update"
								onClick={(e) =>
									handleClickUpdate(
										nowTodo,
										todoText,
										todoColor
									)
								}
							>
								수정
							</button>
							<button
								className="delete"
								onClick={(e) => handleClickDelete(nowTodo)}
							>
								삭제
							</button>
						</>
					)}
				</ButtonArea>
			</ModalBody>
		</ModalWrap>
	);
};
export default Modal;
