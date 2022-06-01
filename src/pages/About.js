import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDir } from './hooks';

export default function About() {
  const { dir } = useDir();

  return (
    <section className={`section about ${dir}`}>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur maxime
        alias sequi corrupti in, veniam eum nulla. Repudiandae, assumenda incidunt nemo
        quia nobis fugit libero ipsam harum consequatur quidem amet quisquam facere at
        inventore quod similique cumque dolor ab ducimus accusamus id! Necessitatibus
        beatae voluptas eaque assumenda in exercitationem voluptatibus. In nihil nemo
        laborum eveniet iusto eum et. Cumque, numquam voluptatem! Dignissimos quas porro
        quia suscipit quisquam soluta repudiandae, maxime tenetur tempora, delectus, cum
        saepe velit doloremque. Nihil repellat, quos alias a est quae cum. Sit, laborum?
        Dolorum sunt alias accusantium, doloribus earum corrupti rem fugiat facilis veniam
        tempore quo?
      </p>
    </section>
  );
}
