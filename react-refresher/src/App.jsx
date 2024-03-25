import Post from "./components/Post";

function App() {
  return (
    //root element or React Fragment
    <>
      <Post author="Anthony" body="Hello World" />
      <Post author="Maximilian" body="Hola Mundo!" />
    </>
  );
}

export default App;
