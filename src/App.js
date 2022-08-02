import "./App.scss";
//import Content from "./Content.js";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//render Component cua Evondev
// function Feature() {
//   return (
//     <div className="feature">
//       <img
//         width={100}
//         className="feature-img"
//         src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/293073627_1683541658699490_9043656554788639602_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7R4letxsfhsAX_H00VR&_nc_ht=scontent.fhph1-1.fna&oh=00_AT8we4j2ga7bQtwNTvA-k8gpk9INSPkqRqJJfAmyUm9s6w&oe=62D1C666"
//         alt=""
//       />
//       <h3 className="feature-title">Title</h3>
//       <p className="feature-desc">
//         Avatar không cần phải biết nó đang được render bên trong Comment.
//       </p>
//     </div>
//   );
// }

//render trang ytb ra ngoai man hinh
//prop: properties
// function YouTubeItem(props) {
//   console.log(props);
//   return (
//     <div className="youtube-item">
//       <div className="youtube-img">
//         <img src={props.imgage} alt="" className="" />
//       </div>

//       <div className="youtube-footer">
//         <img src={props.avt} alt="" className="youtube-avt" />

//         <div className="youtube-info">
//           <h3 className="youtube-title">{props.title}</h3>
//           <h4 className="youtube-author">{props.author}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Header() {
//   return <div className="header">Header</div>;
// }

// function PostItem({ tilte, image, desc }) {
//   return (
//     <div className="post-item">
//       <h3 className="post-title">{tilte}</h3>
//       <img src={image} alt="" className="post-img" />
//       <p className="post-desc">{desc}</p>
//     </div>
//   );
// }

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
  const [todoList, setTodoList] = useState([
    { id: 1, title: "quet nha" },
    { id: 2, title: "rua bat" },
    { id: 3, title: "giat quan ao" },
  ]);

  //CLick vao todo thi XOA todo
  const handleDeleteTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    //tao Mang moi
    const newTodoList = [...todoList]; // clone Mang cu
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  //submit
  const handleTodoFormSubmit = (formValues) => {
    console.log("form-submit", formValues);

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

  return (
    <div className="app">
      {/*Childrent component */}
      {/*  <Feature />
      <YouTubeItem
        imgage="https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        avt="https://images.unsplash.com/photo-1657546978958-76f538211af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        title="abcxyz"
        author="Sang"
      /> */}
      {/* <Header /> */}

      {/* <PostItem
        image="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        tilte="Hello baby"
        desc="abcxyz"
      /> */}

      {/* Course */}
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
      <h1>todoList react hook</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleDeleteTodoClick} />
    </div>
  );
}

export default App;
