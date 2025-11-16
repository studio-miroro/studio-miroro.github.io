import "../styles/Games.css"

import bread from "../images/delicious-bread.png"
import farmer from "../images/little-farmer.png"
import soup from "../images/delicious-bread.png"

function Games() {
  const games = {
    1: {
      cover: bread,
      title: "Delicious Bread",
      description: "Пиксельный симулятор пекаря.",
      price: 0,
      released: true,
      store: "https://gamejolt.com/games/deliciousbread/848434"
    },
    2: {
      cover: farmer,
      title: "Little Farmer",
      description: "Расслабляющий симулятор фермерства.",
      price: 99.00,
      released: true,
      store: "https://vkplay.ru/play/game/little-farmer/"
    },
    3: {
      cover: soup,
      title: "Delicious Soup",
      description: "Небольшой симулятор уличного повара.",
      price: 0,
      released: false,
      store: ""
    }
  };

  return (
    <section id="games">
      <div className="game-container">
        {Object.entries(games).map(([key, parameter]) => (
          <article key={key}>
            <img src={parameter.cover}/>
            <div className="info">
              <h1>{parameter.title}</h1>
              <p>{parameter.description}</p>
              <p>{(parameter.price > 0) ? parameter.price.toFixed(2) + " ₽" : "Бесплатно"}</p>
              <div className="buttons">
                <button 
                  onClick={() => {(parameter.store.length === 0) ? console.error("store url is empty.") : window.open(parameter.store, "_blank")}} 
                  id={!(parameter.released) ? "disabled" : ""}>
                  {(parameter.price > 0) ? "Купить" : "Установить"}
                </button>
                <button>Подробнее &#10095;</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Games };