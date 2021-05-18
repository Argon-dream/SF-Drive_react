import React from "react";
import "./../../styles/AboutUs/teams__frame.scss";

function Team() {

    return (
        <section className="teams__frame">
            <div className="content__container is-align-center">
                <h2>Команда</h2>
                <div className="teams__frame-team">
                    <div className="teams__frame-team-item">
                        <img src="./../../assets/photoUs/II.png" alt="Иван Иванов" />
                            <p className="teams__frame-team-item is-name">Иван Иванов</p>
                            <p className="teams__frame-team-item is-spec">СЕО</p>
                    </div>
                    <div className="teams__frame-team-item">
                        <img src="./../../assets/photoUs/AS.png" alt="Алексей Смирнов" />
                            <p className="teams__frame-team-item is-name">Алексей Смирнов</p>
                            <p className="teams__frame-team-item is-spec">Frontend-разработчик</p>
                    </div>
                    <div className="teams__frame-team-item">
                        <img src="./../../assets/photoUs/DJ.png" alt="Денис Ярцев" />
                            <p className="teams__frame-team-item is-name">Денис Ярцев</p>
                            <p className="teams__frame-team-item is-spec">Backend-разработчик</p>
                    </div>
                    <div className="teams__frame-team-item">
                        <img src="./../../assets/photoUs/NM.png" alt="Николай Морозов" />
                            <p className="teams__frame-team-item is-name">Николай Морозов</p>
                            <p className="teams__frame-team-item is-spec">Дизайнер</p>
                    </div>
                    <div className="teams__frame-team-item">
                        <img src="./../../assets/photoUs/ID.png" alt="Ирина Деева" />
                            <p className="teams__frame-team-item is-name">Ирина Деева</p>
                            <p className="teams__frame-team-item is-spec">Копирайтер</p>
                    </div>
                    <div className="teams__frame-team-item">
                        <img src="./../../assets/photoUs/MS.png" alt="Мария Стрелкова" />
                            <p className="teams__frame-team-item is-name">Мария Стрелкова</p>
                            <p className="teams__frame-team-item is-spec">SMM</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Team;