import "./App.scss";
//import Content from "./Content.js";
import { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";

//render khoa hoc ra ngoai man hinh
// const CourseItem = (props) => (
//     <div>
//       <h2>{props.title}</h2>
//       <img alt="" src={props.image} />
//       <p>{props.desc}</p>
//       <p>{props.studentsCount}</p>
//     </div>
// );

// bai toan: lam mot ung dung DEM SO, bat dau dem tu so 1
// co mot nut bam vao se thay doi so theo thu tu tang dan

//hooks easyfrontend

//parent component
function App() {
  //state todoList
  const [todoList, setTodoList] = useState([
    { id: 1, title: "quet nha" },
    { id: 2, title: "rua bat" },
    { id: 3, title: "giat quan ao" },
  ]);

  //state call API
  const [postList, setPostList] = useState([]);

  //state pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  //state gioi han trang
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  //state show Clock
  const [showClock, setShowClock] = useState(true);

  //CLick vao todo thi XOA todo: handleDeleteTodoClick
  const handleDeleteTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    //tao Mang moi
    const newTodoList = [...todoList]; // clone Mang cu
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  //handleTodoFormSubmit
  const handleTodoFormSubmit = (formValues) => {
    //add new todo to current todoList
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    //clone current todo
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    //cap nhat lai todoList
    setTodoList(newTodoList);
  };

  //handlePageChange
  const handlePageChange = (newPage) => {
    setFilters({
      ...filters, // bao luu filters
      _page: newPage,
    });
  };

  //emty array chi render dung mot lan dau
  useEffect(() => {
    //call API
    async function fetchPostList() {
      try {
        //_limit=10, _page=3
        const paramsString = queryString.stringify(filters);
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data); //cap nhat lai du lieu post moi
        setPagination(pagination); // cap nhat lai trang moi
      } catch (error) {
        console.log("failed to fetch post list", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  //handleFiltersChange
  const handleFiltersChange = (newFilters) => {
    setFilters({
      ...filters,
      _page: 1,
      tilte_like: newFilters.searchTerm,
    });
  };

  return (
    <div className="app">
      {/* render Course */}
      {/* {courses.map((course) => (
        <CourseItem
          key={course.id}
          title={course.title}
          desc={course.description}
          studentsCount={course.students_count}
          image={course.image_url}
        />
      ))} */}
      <ColorBox />
      <h1>react hook</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleDeleteTodoClick} />
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
