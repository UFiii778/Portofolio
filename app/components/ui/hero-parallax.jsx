"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const HeroParallax = ({ products }) => {
  // Six projects are displayed in two rows of three.
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const ref = React.useRef(null);

  // Ubah offset agar animasi mulai aktif sejak komponen masuk ke dalam viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Konfigurasi Spring yang lebih responsif (stiffness lebih tinggi & mass lebih kecil agar tidak telat)
  const springConfig = { stiffness: 300, damping: 30, mass: 0.1 };

  const moveRight = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 180]),
    springConfig
  );
  const moveLeft = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -180]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [8, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [0.4, 1]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative isolate overflow-hidden py-12 sm:py-16 [perspective:1200px]"
    >
      <motion.div
        style={{ rotateX, opacity }}
        className="relative z-10 space-y-7 sm:space-y-10"
      >
        <div className="flex flex-row-reverse justify-center gap-5 px-5 sm:gap-8 lg:gap-10">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={moveRight}
            />
          ))}
        </div>

        <div className="flex flex-row justify-center gap-5 px-5 sm:gap-8 lg:gap-10">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={moveLeft}
            />
          ))}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-white to-transparent dark:from-neutral-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  const hasLink = product.link && product.link !== "#";

  const cardContent = (
    <>
      <div className="absolute inset-0">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 380px"
          className="object-cover object-center transition-transform duration-700 group-hover/product:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {product.title}
        </h3>
        <p className="mt-2 line-clamp-3 max-w-sm text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
          {product.description}
        </p>
        {hasLink && (
          <span className="mt-3 inline-block text-xs font-medium text-sky-200 sm:text-sm">
            Visit project <span aria-hidden="true">↗</span>
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      style={{ x: translate }}
      whileHover={{ y: -10, rotateZ: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group/product relative h-[250px] w-[78vw] max-w-[380px] shrink-0 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-200 shadow-xl shadow-black/10 sm:h-[300px] sm:w-[42vw] lg:h-[340px] lg:w-[380px] dark:border-white/10 dark:bg-neutral-800 dark:shadow-black/30"
    >
      {hasLink ? (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${product.title}`}
          className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {cardContent}
        </a>
      ) : (
        <div className="absolute inset-0">{cardContent}</div>
      )}
    </motion.article>
  );
};