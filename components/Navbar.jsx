export default function Navbar() {
  return (
    <nav style={{background: "black", color: "white", padding: "15px"}}>
      <div className="container" style={{display: "flex", justifyContent: "space-between"}}>
        <h3>Atha</h3>
        <div>
          <span style={{margin: "10px"}}>About</span>
          <span style={{margin: "10px"}}>Service</span>
          <span style={{margin: "10px"}}>Project</span>
          <span style={{margin: "10px"}}>Contact</span>
        </div>
      </div>
    </nav>
  );
}