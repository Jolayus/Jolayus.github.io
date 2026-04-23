function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>Copyright {year} Julius Odref Czar Cabangon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
