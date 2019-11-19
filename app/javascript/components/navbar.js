const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener( 'scroll', (event) => {
      if (window.scrollY >= window.innerHeight) {
        console.log(navbar);
        navbar.classList.add("navbar-purple");
      }
      else {
        navbar.classList.remove("navbar-purple");
      }
    })
  }
}

export { initUpdateNavbarOnScroll };
