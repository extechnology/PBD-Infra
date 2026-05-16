import { useState } from "react";
import { keyStepsData } from "../../constants/keyStepsData";
import FadeIn from "../shared/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const KeySteps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <FadeIn>
      <div className="timeline-root">
        <div className="timeline-inner">
          <SectionHeading
            title="Key Steps Through Our Journey"
            subtitle="Building Success Through Every Milestone"
          />

          <div className="chain">
            {keyStepsData?.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`chain-link${isActive ? " active-link" : ""}`}
                  style={{ "--accent": "#d4af37" } as React.CSSProperties}
                  onClick={() => setActiveStep(isActive ? null : idx)}
                >
                  <div className={`link-card${isActive ? " active" : ""}`}>
                    <div className="card-accent-bar" />
                    <div className="card-year">{step.year}</div>
                    <div className="card-title">{step.title}</div>
                    <div className="card-desc">{step.description}</div>
                  </div>

                  <div className="node-wrap">
                    <div className="node-connector-top" />
                    <div className="node-outer">
                      <div className="pulse-ring" />
                      <div className="node-inner">{step.icon}</div>
                    </div>
                    <div className="node-connector-bottom" />
                  </div>

                  <div className="empty-side" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default KeySteps;

