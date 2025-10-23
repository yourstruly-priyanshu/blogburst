"use client";

import React, { useState, useEffect } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/categories", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const fetchedData = await res.json();
        console.log("Fetched data:", fetchedData); // Log the fetched data
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set an empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src="/style.png" // Corrected image path
            alt="Style"
            width={32}
            height={32}
            className={styles.image}
          />
          STYLE
        </Link>
        <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/culture.png" // Corrected image path
            alt="Culture"
            width={32}
            height={32}
            className={styles.image}
          />
          CULTURE
        </Link>
        <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png" // Corrected image path
            alt="Fashion"
            width={32}
            height={32}
            className={styles.image}
          />
          FASHION
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.png" // Corrected image path
            alt="Food"
            width={32}
            height={32}
            className={styles.image}
          />
          FOOD
        </Link>
        <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.png" // Corrected image path
            alt="Travel"
            width={32}
            height={32}
            className={styles.image}
          />
          TRAVEL
        </Link>
        <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.png" // Corrected image path
            alt="Coding"
            width={32}
            height={32}
            className={styles.image}
          />
          CODING
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
