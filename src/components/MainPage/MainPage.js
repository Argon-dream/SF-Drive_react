import React from "react";
import "../../styles/MainPage/main__start.scss";
import ups from "./../../assets/icon/ups.svg";

function MainPage() {

    return (
        <section className="start">
            <div className="content__container is-align-center">
                <div>
                    <div className="main__start-img">
                        <img src={ups} alt="About us picture" />
                    </div>
                    <h1>Упс...</h1>
                    <p className="main__start-text">Приносим свои извинения, данная страница находится в стадии разработки.</p>
                </div>

            </div>
        </section>
    );

}

export default MainPage;