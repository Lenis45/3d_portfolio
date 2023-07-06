import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// создание блоков и анимаций под них
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
    {/* создаём текст для раздела обзор  */}
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Введение</p>
        <h2 className={styles.sectionHeadText}>Обзор.</h2>
      </motion.div>


      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Я опытный разработчик программного обеспечения с опытом работы с TypeScript и
      JavaScript и опыт работы с такими фреймворками, как React, Node.js и
      Три.js. Я быстро учусь и тесно сотрудничаю с клиентами, чтобы
      создавать эффективные, масштабируемые и удобные решения, которые решают
      проблемы реального мира. Давайте работать вместе, чтобы воплотить ваши идеи в жизнь!
      </motion.p>

      {/* блок в котором содержиться опыт использования */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");