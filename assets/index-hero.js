(() => {
  const buildHero = () => {
    const hero = document.querySelector('section.hero-bg');
    const layout = hero && hero.querySelector('.relative.z-10.w-full.max-w-7xl');
    const leftContent = layout && layout.querySelector(':scope > .text-left');
    if (!layout || !leftContent) return;

    const formCard = leftContent.nextElementSibling;
    const heading = document.createElement('div');
    heading.className = 'index-hero-heading';
    Array.from(leftContent.children).slice(0, 3).forEach((part) => heading.appendChild(part));

    const grid = document.createElement('div');
    grid.className = 'index-hero-grid';
    const demo = document.createElement('div');
    demo.className = 'index-demo-card';
    demo.innerHTML = '<div class="index-demo-shimmer"></div><div class="index-demo-frame"><iframe src="https://www.youtube.com/embed/hAPZLXoTxks?rel=0" title="MLM service provider video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="index-demo-label">VK SERVICES ENTERPRISE</div></div><div class="index-demo-footer"><span>▶ Watch Free Demo</span><a href="tel:+918927656368" style="color:#fff;text-decoration:none">✆ Call Now</a></div><p class="index-demo-note"><strong>Don\'t just buy. Test it yourself before spending a single rupee!</strong> Watch the complete presentation video above, then explore our services below.</p>';

    layout.className = 'relative z-10 w-full mx-auto index-hero-layout';
    formCard.classList.add('index-hero-form');
    layout.replaceChildren(heading, grid);
    grid.append(demo, formCard);
  };

  const addFooter = () => {
    if (document.querySelector('.site-footer')) return;
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = '<div class="site-footer-inner"><div class="site-footer-top"><div class="site-footer-brand"><h2>VK Services Enterprise</h2><p>Practical MLM software, websites, videos, databases, and plan-design services built to help your network grow with confidence.</p></div><nav class="site-footer-links" aria-label="Contact links"><a href="tel:+918927656368">Call us</a><a href="https://wa.me/919237377196" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:info@vkservicesenterprise.com">Email us</a></nav></div><div class="site-footer-bottom">© 2026 VK Services Enterprise. All rights reserved.</div></div>';
    document.body.appendChild(footer);
  };

  buildHero();
  addFooter();
})();
