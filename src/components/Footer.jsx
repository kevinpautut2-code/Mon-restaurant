function Footer() {
  return (
    <footer
      className="site-footer d-flex align-items-end justify-content-center"
      style={{ backgroundImage: 'url(/bg_footer.jpg)' }}
    >
      <p className="footer-copy mb-0">
        Copyright &copy; {new Date().getFullYear()} — Mon Restaurant
      </p>
    </footer>
  )
}

export default Footer
