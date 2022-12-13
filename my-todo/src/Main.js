import styled from "styled-components";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Modal from "./components/Modal";
import todoData from "./static/data";
import IconPlus from "./icons/IconPlus";
import { useState } from "react";

const MainContent = styled.div`
	width: 100%;
	height: 100%;
	background: #f4f4f4;
	position: relative;
	overflow-y: scroll;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: var(--font-regular);
`;

const TodoList = styled.ul`
	padding: 16px 0;
`;

const ButtonAddFloat = styled.button`
	position: absolute;
	right: 16px;
	bottom: 16px;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	background: var(--btn-color);
	filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.14))
		drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.12))
		drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
`;

//색상리스트: 나중에 커스텀 가능하게 할 예정
const colorList = [
	"none",
	"#E88685",
	"#FFF387",
	"#91CE93",
	"#64BFB6",
	"#8B95D2",
];

const ModalBack = styled.div`
	background: rgba(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Main = () => {
	const [todos, setTodos] = useState(todoData);
	const [nowTodo, setNowTodo] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCreate, setIsCreate] = useState(false); //false면 수정 및 삭제 modal, true면 추가 modal

	//CREATE
	const handleClickCreate = (todoText, colorNumber) => {
		const newTodo = {
			todo: todoText,
			color: colorNumber,
			isComplete: false,
		};

		setTodos([...todos, newTodo]);
		setIsModalOpen(!isModalOpen);
	};

	//DELETE
	const handleClickDelete = (itemTodo) => {
		let data = todos.filter((el) => el.todo !== itemTodo);
		setTodos(data);
		setNowTodo("");
		setIsModalOpen(!isModalOpen);
	};

	//UPDATE
	const handleClickUpdate = (itemTodo, todoText, colorNumber) => {
		const changeData = {
			todo: todoText,
			color: colorNumber,
			isComplete: false,
		};
		let data = todos.map((el) => {
			if (el.todo === itemTodo) {
				return changeData;
			} else {
				return el;
			}
		});
		setTodos(data);
		setIsModalOpen(!isModalOpen);
	};

	//Modal Open
	const handleClickModalOpen = (e) => {
		if (e.currentTarget.value === "add") {
			setIsCreate(true);
		} else {
			setIsCreate(false);
		}
		setIsModalOpen(!isModalOpen);
	};

	//현재 단계에서 할 일 체크한 것을 데이터에 등록할 필요가 있을까??
	//만약 활성화시 ListItem에 isComplete={el.isComplete} 추가할 것
	//const [todoIsComplete, setTodoIsComplete] = useState(false); 추가하기
	// const handleClickCheckTodo = () => {
	// 	console.log();
	// };

	return (
		<MainContent>
			<Header />
			<main className="container">
				<Title>해야할 일</Title>
				<TodoList>
					{todos.map((el, idx) => {
						return (
							<ListItem
								key={idx}
								todo={el.todo}
								color={colorList[el.color]}
								setNowTodo={setNowTodo}
								handleClickModalOpen={handleClickModalOpen}
							/>
						);
					})}
				</TodoList>
			</main>
			{isModalOpen ? (
				<ModalBack>
					<Modal
						colorList={colorList}
						handleClickCreate={handleClickCreate}
						handleClickDelete={handleClickDelete}
						handleClickUpdate={handleClickUpdate}
						nowTodo={nowTodo}
						handleClickModalOpen={handleClickModalOpen}
						isCreate={isCreate}
					/>
				</ModalBack>
			) : null}
			<ButtonAddFloat
				value="add"
				onClick={(e) => handleClickModalOpen(e)}
			>
				<IconPlus />
			</ButtonAddFloat>
		</MainContent>
	);
};
export default Main;
