export default function Dropdown() {
  return (
    <section>
      <div className="dropdown">
        <button className="dropdown-btn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#option1">Option 1</a>
          <a href="#option2">Option 2</a>
          <a href="#option3">Option 3</a>
        </div>
      </div>
    </section>
  );
}
