
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} Umidjon Jurabayev — Built with React & TypeScript</p>
    </footer>
  )
}

export default Footer
