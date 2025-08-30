
const Footer = () => 
{
  return (
<div>
  <footer className="text-white py-4 bg-dark">
    <div className="container">
      <nav className="d-flex justify-content-around align-items-center text-center">
        <a href="/" className="d-flex align-items-center justify-content-center">
          <img
            src="https://assets.goal.com/images/v3/blta8996c6d483d298b/FPRVGNCWYAIUG-w.jpeg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Logo"
            width="150"
            height="150"
            className="mx-2"
          />
        </a>
        <ul className="list-unstyled mb-0">
          <li className="font-weight-bold">facebook</li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li className="font-weight-bold">Instagram</li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li className="font-weight-bold">Whatsapp</li>
        </ul>
      </nav>
    </div>
  </footer>
</div>

  )
}

export default Footer;
