import React from "react"
import CardUser from "./cardUser"
import avatar from "../../../assets/avatars/anna-may-avatar.jpg"

export default {
  title: "partials/cardUser",
  component: CardUser,
  argTypes: {
    info: { control: "text" },
    image: { control: "text" },
    title: { control: "text" },
  },
}

export function Primary(args) {
  return (
    <div style={{ width: "290px", height: "395px" }}>
      <CardUser {...args} />
    </div>
  )
}

Primary.args = {
  info: "hello",
  image: avatar,
  title: "Anna May",
  buttonLabel: "To profile",
  buttonLink: "https://google.com.ua",
}

export function Description() {
  return (
    <div>
      <h2>Компонент CardUser</h2>
      <p> Компонент займає всю ширину контейнеру, в який буде покладений.</p>
      <p>
        {" "}
        Має мінімальну висоту 600рх (для десктопної версії), та збільшує висоту
        в залежності від контенту картки.
      </p>
      <p> В мобільній версії висота визначається контентом.</p>
      <p>
        {" "}
        Оскільки компонент не має фіксованого розміру, для коректного
        відображення в сторібук він покладений у контейнер із сталими розмірами.
      </p>
      <p>
        {" "}
        Мобільні версії відображаються в сторібук некоректно через наявніть
        контейнерів, але працюють як треба.
      </p>
      <p>
        {" "}
        Для просмотру мобільної версії можна видалити розміри контейнеру у
        історії.
      </p>
    </div>
  )
}
