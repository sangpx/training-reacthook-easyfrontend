//import { useRef, useState } from "react";

//useRef: Luu dc gia tri bat ki qua mot tham chieu ben ngoai function component

//1. useEffect (callback)
// - goi callback moi khi component re-render
// - goi callback sau khi component them element vao DOM
//2. useEffect (callback, [])
// - chi goi callback sau khi component mounted
//3. useEffect (callback, [deps])
// - callback se dc goi lai moi khi deps thay doi

/*
  Luu y: + cả trong ba TH: callback luon dc goi sau khi component mounted
         + Cleanup function luon duoc goi truoc khi component unmounted
         + Cleanup function luôn đc gọi trước khi callback được gọi (trừ lần component mounted)
  */

//const tabs = ["posts", "comments", "albums", "todos", "users"];

function Content() {
  /*  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false); */

  //dong ho dem nguoc phai update lai theo tung giay, can re-render lai giao dien
  /* const [countdown, setCountdown] = useState(180);

  //useEffect with Preview avatar
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]); */

  /*useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
      console.log("countdown");
    }, 1000);

    //Cleanup function
    return () => {
      clearInterval(timerId);
    };
  }, []); */

  // useEffect(() => {
  //   //ViDu1. update DOM
  //   //     document.title = title;

  //   //ViDu2. call API
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, [type]);

  // //ViDu3: DOM Events
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 200) {
  //       //show
  //       setShowGoToTop(true);
  //     } else {
  //       //hide
  //       setShowGoToTop(false);
  //     }
  //     //setShowGoToTop(window.scrollY >= 200);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   //Cleanup function: ham don dep: goi truoc khi component unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  //ung dung cho phep chon avatar, khi chon anh thi hien luon anh do len de xem truoc dc
  /* const handlePreviewAvt = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  }; */

  // const [count, setCount] = useState(60);
  // let timerId;

  // const handleStart = () => {
  //   timerId = setInterval(() => {
  //     setCount((prevCount) => prevCount - 1);
  //   }, 1000);
  // };

  return (
    <div>
      {/* {tabs.map((tab) => (
        <button
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name || posts.email}</li>
        ))}
      </ul>

      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )} */}

      {/*  <h1>{countdown}</h1> */}

      {/*  <input type="file" onChange={handlePreviewAvt} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />} */}
    </div>
  );
}

export default Content;
