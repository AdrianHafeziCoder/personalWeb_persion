function Header() {
  return (
    <>
      {/* <!-- NAVBAR --> */}

      <nav className="navbar">
        <a href="#home" className="logo">
          {" "}
          H<span>.</span>{" "}
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">خانه</a>
          </li>
          <li>
            <a href="#about">درباره من</a>
          </li>
          <li>
            <a href="#skills">مهارت‌ها</a>
          </li>
          <li>
            <a href="#experience">تجربه</a>
          </li>
        </ul>

        <a
          href="https://t.me/Adrian_Hafezi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary telegram-btn"
        >
          <i className="fa-brands fa-telegram"></i>
          ارتباط از طریق تلگرام
        </a>
      </nav>

      {/* <!-- HERO --> */}

      <header className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot"></span>
            آماده همکاری در پروژه‌های جدید
          </div>

          <h1>
            سلام، من <span className="gradient-text">حسین حافظی</span> هستم.
          </h1>

          <p className="hero-description">
            طراح و توسعه‌دهنده وب با تمرکز بر ساخت وب‌سایت‌های مدرن، سریع و
            کاربرپسند. علاقه‌مند به دنیای تکنولوژی، طراحی رابط کاربری و توسعه
            نرم‌افزار.
          </p>

          <div className="hero-buttons">
            <a
              href="https://t.me/Adrian_Hafezi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary telegram-btn"
            >
              <i className="fa-brands fa-telegram"></i>
              گفتگو در تلگرام
            </a>

            <a href="#about" className="btn btn-outline">
              بیشتر درباره من
              <i className="fa-solid fa-arrow-left"></i>
            </a>
          </div>

          <div className="hero-socials">
            <a href="#" className="social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" className="social-icon" aria-label="Telegram">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>

        {/* <!-- PROFILE IMAGE --> */}

        <div className="profile-container">
          <div className="profile-wrapper">
            <div className="profile-glow"></div>
            <div className="profile-ring"></div>

            <div className="profile-frame">
              <img
                src={`${import.meta.env.BASE_URL}img/photo_2026-11-13_09-55-49.jpg`}
                alt="تصویر پروفایل حسین حافظی"
              />
            </div>

            <div className="profile-tag">
              <i className="fa-solid fa-code"></i>
              Creative Developer
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
