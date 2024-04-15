import React from 'react'
import { stats } from '../constants'
import styles from '../styles'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div className={`flex-1 ${styles.flexCenter} flex-row m-3`} key={stat.id}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30x] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15x] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats
