import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Global warming.</h1>
          <p className={styles.postDesc}>
          Global warming is the long-term warming of the planet’s overall temperature. 
          Though this warming trend has been going on for a long time, 
          its pace has significantly increased in the last hundred years due to the burning of fossil fuels. 
          As the human population has increased, so has the volume of fossil fuels burned. 
          Fossil fuels include coal, oil, and natural gas, and burning them causes what is known as the “greenhouse effect” in Earth’s atmosphere.
          <br></br>     1. Burning Fossil Fuels
          <br></br>     2. Deforestation
          <br></br>     3. Industrial Processes
          <br></br>     4. Agricultural Practices
          <br></br>     5. Waste Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
