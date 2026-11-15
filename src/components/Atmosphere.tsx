export function Atmosphere() {
  return (
    <div className="ms-atmosphere" aria-hidden="true">
      <div className="atmosphere-glow glow-one" />
      <div className="atmosphere-glow glow-two" />
      <div className="atmosphere-glow glow-three" />
      <div className="atmosphere-glow glow-four" />
      <div className="atmosphere-grid" />
      <svg
        className="atmosphere-trails"
        viewBox="0 0 1440 4500"
        preserveAspectRatio="none"
      >
        <path d="M-100 200C700-100 700 650 1500 300M-100 230C700-70 700 680 1500 330M1500 800C400 400 1200 1600-100 1400M1500 830C400 430 1200 1630-100 1430M-100 1900C600 1300 700 2300 1500 1900M1500 2700C600 2400 200 3400-100 3100M-100 3600C800 3200 600 4300 1500 4000" />
        <circle cx="680" cy="365" r="5" />
        <circle cx="820" cy="1045" r="5" />
        <circle cx="520" cy="2450" r="5" />
        <circle cx="940" cy="3450" r="5" />
      </svg>
    </div>
  );
}
