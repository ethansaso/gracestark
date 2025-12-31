<template>
  <h1>News</h1>
  <p>TODO: Some description would go here.</p>
  <section>
    <h2>Talks</h2>
    <ul>
      <li className="news-item">
        <article>
          <time>January 24, 2024</time>
          <h2>A Deep Look Into Fungi: Fantastical, Fun, and Functional</h2>
          <p>
            Discover the fascinating world of fungi in this special event in
            collaboration with KQED's Depp Look wildlife series. I co-delivered
            this talk with other naturalists and scientists, a psychedelics
            innovator, and renowned Bay Area mushroom chefs.
          </p>
          <img src="/news/fantastic-fungi.jpg" />
        </article>
      </li>
      <li className="news-item">
        <article>
          <time>November 21, 2022</time>
          <h2>Fungal Immunity: How Fungi Perceive and Exist With Predators</h2>
          <p>
            This talk touches on the basics of fungal cell and molecular
            biology, and how cell biology translates to where and why fungi live
            and look a certain way.
          </p>
          <img src="/news/la-immunity.png" />
        </article>
      </li>
      <li className="news-item">
        <article>
          <time>November 18, 2021</time>
          <h2>Fungal Immune Systems with Grace Stark</h2>
          <p>
            This talk goes over my path in academia, the basics of cell and
            molecular biology, fungal cell biology, immune systems, and my
            independent research on the fungal immune system!
          </p>
          <img src="/news/immune-systems.jpg" />
        </article>
      </li>
      <li className="news-item">
        <article>
          <time>June 27, 2020</time>
          <h2>Myco-heterotrophs: Parasitic Plants from Texas to California</h2>
          <p>
            In this article, I discuss the difference between California and
            Texas myco-heterotrophs, how to spot them, how to determine the
            fungi they are in association with, and questions that still exist
            in the field of mycoheterotrophy.
          </p>
          <img src="/news/myco-heterotrophs.png" />
        </article>
      </li>
    </ul>
  </section>

  UNFOUND: https://lamushrooms.org/events/event_202211.html
</template>

<style scoped>
h2 {
  margin-top: 0;
  margin-bottom: var(--spacing-sm);
}
p {
  margin-top: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  aspect-ratio: 16/9;
  object-fit: cover;
  max-width: 100%;
}
li.news-item:not(:last-of-type) {
  margin-bottom: var(--spacing-xl);
}
</style>
