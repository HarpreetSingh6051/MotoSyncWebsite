import { CommunityVision } from "./ProductVision";
import { Feature3DWall } from "./widgets/Feature3DWall";

export function CommunityFeatures() {
  return (
    <>
      <section className="ms-section community-features" id="features">
        <div className="ms-section-heading">
          <div>
            <span className="ms-eyebrow">LUBAN 3D FEATURE LAB · THE PACK ECOSYSTEM</span>
            <h2>
              Everything around
              <br />
              <em>your life on two wheels.</em>
            </h2>
          </div>
          <p>
            Meet your people. Make plans. Stay in the conversation. Drag or
            swipe across our 3D interactive wall designed with Luban 3D depth telemetry.
          </p>
        </div>

        {/* 3D Wall Carousel with Magnific-Style Cartoon Art & Luban 3D Micro-Viewports */}
        <Feature3DWall />
      </section>
      <CommunityVision />
    </>
  );
}
