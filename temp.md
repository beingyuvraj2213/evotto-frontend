.navbar {
  font-family: "Poppins", serif;
  font-weight: 800;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1.7rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ff9f00;
}

.nav-item {
  display: block;
}

.ham-btn {
  display: none;
}

@media (max-width: 900px) {
  .nav-item {
    display: none;
  }

  .menu-nav-item a {
    display: block;
    text-decoration: none;
    color: #fff;
  }

  .ham-btn-hidden {
    display: none;
  }

  .hamburger-menu {
    display: block;
  }

  .ham-btn {
    display: block;
  }

  .menu-nav-links {
    background-image: url("/images/nav_background3.avif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 70vw;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    list-style: none;
  }

  .menu-nav-links a {
    padding: 1rem;
    text-align: center;
    transition: color 0.3s;
  }

  .menu-nav-links a:hover {
    color: #ff9f00;
  }
}