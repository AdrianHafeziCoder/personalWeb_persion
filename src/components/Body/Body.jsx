export default function Body() {
  return (
    <>
      {/* <!-- ABOUT --> */}

      <section id="about">
        <div className="section-heading reveal">
          <span className="section-label">ABOUT ME</span>

          <h2>درباره من</h2>

          <p>کمی بیشتر با من و مسیر کاری‌ام آشنا شوید.</p>
        </div>

        <div className="about-card reveal">
          <div className="about-text">
            <h3>من عاشق ساختن چیزهای جدید هستم!</h3>

            <p>
              من حسین حافظی هستم، یک طراح و توسعه‌دهنده وب از ایران. حدود یک سال
              است که به‌صورت فریلنسری در زمینه طراحی و توسعه وب‌سایت فعالیت
              می‌کنم.
              <br />
              <br />
              تمرکز اصلی من روی طراحی رابط کاربری زیبا، تجربه کاربری مناسب و
              توسعه وب‌سایت‌های مدرن است. همیشه سعی می‌کنم مهارت‌هایم را به‌روز
              نگه دارم و چیزهای جدیدی یاد بگیرم.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <i className="fa-solid fa-user"></i>
              <span>نام و نام خانوادگی</span>
              <strong>حسین حافظی</strong>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>محل فعالیت</span>
              <strong>یزد، ایران</strong>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-briefcase"></i>
              <span>نوع فعالیت</span>
              <strong>فریلنسری</strong>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-clock"></i>
              <span>سابقه فعالیت</span>
              <strong>۱ سال</strong>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SKILLS --> */}

      <section id="skills">
        <div className="section-heading reveal">
          <span className="section-label">MY SKILLS</span>

          <h2>مهارت‌های من</h2>
          <p>ابزارهایی که با آن‌ها ایده‌ها را به واقعیت تبدیل می‌کنم.</p>
        </div>

        <div className="skills-grid">
          <div className="skill-card reveal">
            <div className="skill-icon">
              <i className="fa-brands fa-html5"></i>
            </div>

            <h3>HTML5</h3>
            <p>ساختار صفحات وب</p>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <i className="fa-brands fa-css3-alt"></i>
            </div>

            <h3>CSS3</h3>
            <p>طراحی و استایل‌دهی</p>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <i className="fa-brands fa-js"></i>
            </div>

            <h3>JavaScript</h3>
            <p>تعامل و منطق برنامه</p>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <i className="fa-brands fa-git-alt"></i>
            </div>

            <h3>Git</h3>
            <p>مدیریت نسخه و کنترل تغییرات</p>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <i className="fa-brands fa-react"></i>
            </div>

            <h3>React</h3>
            <p>توسعه رابط کاربری</p>
          </div>

          <div className="skill-card reveal">
            <div className="skill-icon">
              <i className="fa-brands fa-github"></i>
            </div>

            <h3>GitHub</h3>
            <p>میزبانی و مدیریت پروژه‌ها</p>
          </div>
        </div>
      </section>

      {/* <!-- EXPERIENCE --> */}

      <section id="experience">
        <div className="section-heading reveal">
          <span className="section-label">EXPERIENCE</span>

          <h2>تجربه کاری</h2>

          <p>مسیر حرفه‌ای من در دنیای طراحی وب.</p>
        </div>

        <div className="experience-card reveal">
          <div className="experience-top">
            <h3>طراح و توسعه‌دهنده وب</h3>

            <span className="experience-badge"> ۱ سال تجربه </span>
          </div>

          <p>
            فعالیت به‌صورت فریلنسری در زمینه طراحی و توسعه وب‌سایت. تمرکز بر
            ایجاد رابط‌های کاربری مدرن، طراحی واکنش‌گرا و پیاده‌سازی صفحات وب با
            استفاده از تکنولوژی‌های روز.
          </p>

          <div className="experience-points">
            <span>Web Design</span>
            <span>Frontend Development</span>
            <span>Responsive Design</span>
            <span>UI / UX</span>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT --> */}

      <section id="contact">
        <div className="contact-card reveal">
          <h2>بیایید ایده‌ها را به واقعیت تبدیل کنیم!</h2>

          <p>
            اگر پروژه‌ای در ذهن دارید یا به دنبال همکاری در زمینه طراحی وب
            هستید، خوشحال می‌شوم درباره آن صحبت کنیم.
          </p>

          <a
            href="https://t.me/Adrian_Hafezi"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-contact telegram-contact"
          >
            <i className="fa-brands fa-telegram"></i> ارتباط با من
          </a>
        </div>
      </section>
    </>
  );
}
