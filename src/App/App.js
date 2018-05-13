import React, { Component } from 'react';
import News from './News/News';
import './App.css';

let myNews = [
    {
        author: "Саша Печкин ",
        text: "В четверг, четвертого числа... "
    },
    {
        author: "Просто Вася ",
        text: "Считаю, что $ должен стоить 37 гривен! "
    },
    {
        author: "Гость ",
        text: "Бесплатно. Скачать. Лучший сайт - http://localhost:3000 "
    }
];




class App extends Component {
  render() {
    return (
      <div className="App">
          Всем привет, я компонент App! Я умею отображать новости.
          <News data = {myNews} />
      </div>
    );
  }
}

export default App;
