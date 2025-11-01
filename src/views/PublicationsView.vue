<template>
  <h1>Publications</h1>
  <p>Shpeal</p>
  <h2>Articles</h2>
  <div class="pub-container">
    <img src="/publications/immunity.jpg" alt="lena" />
    <div>
      <h3>
        <a href="https://doi.org/10.1101/2025.01.22.633611"
          >Molecular Insights into Fungal Innate Immunity Using the
          <em>Neurospora crassa</em> - <em>Pseudomonas syringae</em> Model</a
        >
      </h3>
      <p>
        <b>Frances Grace Stark</b>, Mari Torii-Karch, Sudyut Yuvaraj, Lucas
        Bonometti, Pierre Gladieux, N. Louise Glass, Ksenia Krasileva
      </p>
      <p class="journal-info">bioRxiv 2025.01.22.633611</p>
    </div>
  </div>
  <div class="pub-container">
    <img
      src="/publications/duckweed.jpg"
      alt="Range of symptoms after Pst DC3000 inoculation"
    />
    <div>
      <h3>
        <a href="https://doi.org/10.1101/2022.12.09.519836"
          ><em>Pseudomonas</em> isolates from ponds populated with duckweed
          prevent disease caused by pathogenic <em>Pseudomonas</em> species</a
        >
      </h3>
      <p>E.L Baggs, <b>F.G Stark</b>, M.B Tiersma, K.V Krasileva</p>
      <p class="journal-info">bioRxiv 2022.12.09.519836</p>
    </div>
  </div>
  <div class="pub-container">
    <img src="/publications/pyrolyzed.jpg" alt="lena" />
    <div>
      <h3>
        <a href="https://doi.org/10.3389/fmicb.2021.729289"
          >Pyrolyzed Substrates Induce Aromatic Compound Metabolism in the
          Post-fire Fungus, <em>Pyronema domesticum</em></a
        >
      </h3>
      <p>
        Monika S. Fischer, <b>Frances Grace Stark</b>, Timothy D. Berry, Nayela
        Zeba, Thea Whitman, Matthew F. Traxler
      </p>
      <p class="journal-info">Front. Microbiol., vol. 12, 2021</p>
    </div>
  </div>
</template>

<style>
.pub-container {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-4xl);
  align-items: flex-start;

  img {
    width: 200px;
    height: auto;
    flex: 0 0 auto;
  }

  h3 {
    margin: 0 0 var(--spacing-md);

    font-size: var(--font-size-2xl);
    font-weight: 700;

    a {
      color: var(--color-primary);
    }
  }

  p {
    font-size: var(--font-size-lg);
    margin: 0 0 var(--spacing-sm);
  }

  .journal-info {
    color: var(--color-neutral);
  }
}
</style>
