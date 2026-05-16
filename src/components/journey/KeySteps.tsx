import { useState } from "react";
import { keyStepsData } from "../../constants/keyStepsData";

const KeySteps = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <div className="timeline-root">
        <div className="timeline-inner">
          <h2 className="text-4xl text-gold-500 font-medium pb-3 text-center">Key Steps Through Our Journey</h2>
          <p className="text-lg text-gray-400 font-medium text-center pb-10">Building Success Through Every Milestone</p>

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
    </>
  );
};

export default KeySteps;
