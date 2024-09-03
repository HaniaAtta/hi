const locations = [
    { name: 'United States', lat: 37.0902, lng: -95.7129 },
    { name: 'Australia', lat: -25.2744, lng: 133.7751 },
    { name: 'Sweden', lat: 59.3293, lng: 18.0686 },
    { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
    { name: 'Africa', lat: 0, lng: 22.9533 } // note: Africa is a continent, not a country
  ];

  const worldMap = document.querySelector('.world-map');
  const imgWidth = worldMap.offsetWidth;
  const imgHeight = worldMap.offsetHeight;

  locations.forEach((location) => {
    const pin = document.createElement('div');
    pin.className = 'pin';
    pin.innerHTML = `<span>${location.name}</span>`;
    worldMap.appendChild(pin);

    const x = (location.lng + 180) * (imgWidth / 360);
    const y = (90 - location.lat) * (imgHeight / 180);

    pin.style.top = `${y}px`;
    pin.style.left = `${x}px`;
  });