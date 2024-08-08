import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const Collapse = ({ title, children, open }) => {
    const animate = {
        transition: { type: "tween" },
        height: open ? "auto" : 0
    };

    return (
        <LazyMotion features={domAnimation} strict>
            <div aria-expanded={open}>
                <m.div
                    style={{ overflow: "hidden" }}
                    initial={{ height: 0, opacity: 1 }}
                    animate={animate}
                    exit={{ height: 0, opacity: 1 }}
                >
                    {children}
                </m.div>
            </div>
        </LazyMotion>
    );
};

export default Collapse;
