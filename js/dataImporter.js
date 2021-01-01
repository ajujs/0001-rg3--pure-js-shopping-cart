const fetchURL = (url) => {
  fetch(url)
    .then(res => res.json())
    .then (data => data );
}

export { fetchURL };
