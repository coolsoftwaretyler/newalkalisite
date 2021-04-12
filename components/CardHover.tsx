import { useSpring, animated } from 'react-spring'
import React, { Component } from 'react'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const CardHover = (props) => {
  const [springProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40, } }))
  return (
    <animated.div
      className="card w-64 h-96 shadow-2xl"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: springProps.xys.to(trans), backgroundImage: `url("${props.backgroundImage}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <h3 className="font-open rounded-md text-3xl text-white pl-2 pt-80 pl-5 pb-4">{props.title}</h3>
    </animated.div>
  )
}


export default CardHover