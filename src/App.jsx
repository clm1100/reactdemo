import React,{Component,useState,useEffect} from 'react';
import './App.css';


function getAuthor(){
    return new Promise((resolve,rekect)=>{
      setTimeout(()=>{
        let author = ['admin','user'][Math.round(1-Math.random())]
          resolve(author)
      },1000)
    })
  }

function useAuthor(){
    const [author,setAuthor] = useState("");
    async function init(){
        let res = await getAuthor();
        setAuthor(res)
    }
    useEffect(()=>{
        init()
    },[])
    return author;
}

function List(){
    const author = useAuthor();
    if(author==='admin'){
      return <div>管理员</div>
    }else{
      return <div>普通户</div>
    }
  }
  


function Header(author){
  if(author==='admin'){
    return <div>管理员</div>
  }else{
    return <div>普通户</div>
  }
}



function App() {
  return (
    <div className="App">
        <List></List>
    </div>
  );
}

export default App;
