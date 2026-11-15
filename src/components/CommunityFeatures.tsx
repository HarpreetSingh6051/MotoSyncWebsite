import { CommunityVision } from "./ProductVision";
import { Feature3DWall } from "./widgets/Feature3DWall";

export function CommunityFeatures() {
  return (
    <>
      <section className="ms-section community-features" id="features">
        <div className="ms-section-heading">
          <div>
            <span className="ms-eyebrow">YOUR RIDING WORLD, CONNECTED</span>
            <h2>
              Everything around
              <br />
              <em>your life on two wheels.</em>
            </h2>
          </div>
          <p>
            Meet your people. Make plans. Stay in the conversation. Explore our product vision below: interactive demos, with availability evolving as we build.
          </p>
        </div>

        {/* 3D Wall Carousel with Magnific-Style Cartoon Art & Luban 3D Micro-Viewports */}
        <Feature3DWall />
      </section>
      <CommunityVision />
    </>
  );
}
