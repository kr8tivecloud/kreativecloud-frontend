import * as React from "react";

const DEFAULT_MOBILE_BREAKPOINT = 768;

/**
 * Custom React hook to determine if the current viewport width is considered "mobile".
 *
 * This hook listens for changes in the window size and updates its state accordingly.
 * It defaults to a breakpoint of 768px but can be customized.
 *
 * @param {number} [breakpoint=DEFAULT_MOBILE_BREAKPOINT] - The maximum width (in pixels)
 * to be considered mobile. The hook will return `true` if `window.innerWidth` is less than this value.
 * Defaults to `DEFAULT_MOBILE_BREAKPOINT` (768px).
 * @returns {boolean} `true` if the viewport width is less than the specified breakpoint, `false` otherwise.
 *                    Returns `false` during server-side rendering or before the first client-side check.
 */
export function useIsMobile(breakpoint: number = DEFAULT_MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window === "undefined") {
      return;
    }

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial state
    onChange();

    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!isMobile;
}
