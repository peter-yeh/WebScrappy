const extractData = (lower, upper) => {
  const listings = document.getElementsByClassName('a-cardui _cDEzb_grid-cell_1uMOS p13n-grid-content');
  const result = [['Total Length', listings.length]];

  for (let i = 0; i < listings.length; i++) {
    const listing = listings[i];
    if (!listing.getElementsByClassName('a-section zg-bdg-ctr')[0]
      || !listing.getElementsByClassName('_cDEzb_p13n-sc-css-line-clamp-3_g3dy1')[0]
      || !listing.getElementsByClassName('_cDEzb_p13n-sc-price_3mJ9Z')[0]) {
      continue;
    }

    const ranking = listing.getElementsByClassName('a-section zg-bdg-ctr')[0].outerText;
    const name = listing.getElementsByClassName('_cDEzb_p13n-sc-css-line-clamp-3_g3dy1')[0].outerText;
    const price = parseFloat(listing.getElementsByClassName('_cDEzb_p13n-sc-price_3mJ9Z')[0].outerText.slice(2));
    if (price > lower && price < upper) {
      result.push([ranking, price, name]);
    }
  }

  result.sort((a, b) => a[1] - b[1]);
  console.log(result);
}

extractData(50, 150);
