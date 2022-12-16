import { useState } from "react";
import styled from "styled-components";
import IconMore from "../icons/IconMore";

const checkboxImgSrc = "img/checkbox.png";

const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 56px;
	padding: 0 16px;
	margin-bottom: 16px;
	border-radius: 6px;
	background: #fff;
	box-shadow: 1px 1px 1px #cbcbcb;

	.todo_title {
		flex: 1;
		padding: 0 16px;
		line-height: 24px;
		font-weight: var(--font-regular);
	}

	.checkbox_Wrap {
		width: 24px;
		height: 24px;
		overflow: hidden;

		input[type="checkbox"] {
			width: 100%;
			height: 100%;
			appearance: none;
			background-image: url(${checkboxImgSrc});
			background-repeat: no-repeat;
			background-size: 48px 24px;
			background-position: 0 0;
		}
		input[type="checkbox"]:checked {
			background-position: -24px 0;
		}
		label {
			font-size: 0;
		}
	}

	.btn_more {
		width: 24px;
		height: 24px;
	}

	&.complete {
		background: none;
		box-shadow: none;

		.todo_title {
			text-decoration-line: line-through;
			color: var(--main-disabled-color);
		}
	}
`;

const ColorChip = styled.div`
	width: 16px;
	height: 16px;
	margin: 0 16px;
	border-radius: 100%;
	background: ${(props) => props.color};
`;

const ListItem = ({ todo, color, setNowTodo, handleClickModalOpen }) => {
	const [itemClass, setItemClass] = useState("");

	// const handleClickMore = (todo) => {
	// 	setNowTodo(todo);
	// 	handleClickModalOpen();
	// };
	const handleChangeCheck = (e) => {
		let value = e.currentTarget.checked;
		if (value) {
			setItemClass("complete");
		} else {
			setItemClass("");
		}
	};

	return (
		<Item className={itemClass}>
			<div className="checkbox_Wrap">
				{/* {isComplete ? (
					<input
						type="checkbox"
						value={true}
						onChange={(e) => handleChangeCheck(e)}
						checked
					/>
				) : (
					<input
						type="checkbox"
						value={false}
						onChange={(e) => handleChangeCheck(e)}
					/>
				)} */}
				<input type="checkbox" onChange={(e) => handleChangeCheck(e)} />
				<label>완료여부</label>
			</div>
			<h3 className="todo_title">{todo}</h3>
			<ColorChip color={color}></ColorChip>
			<button
				className="btn_more"
				onClick={(e) => {
					setNowTodo(todo);
					handleClickModalOpen(e);
				}}
			>
				<IconMore />
			</button>
		</Item>
	);
};
export default ListItem;
