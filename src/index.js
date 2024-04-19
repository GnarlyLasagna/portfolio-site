import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initCloudCounter from "./scripts/azureCloudCounter";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initCloudCounter();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
