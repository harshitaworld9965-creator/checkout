import { useRef } from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export default function Progress({steps, current}) {
    const fillRef = useRef(null);

    useGSAP(() => {
        gsap.to(fillRef.current, {
            scaleX: current / (steps.length -1),
            duration:0.6,
            ease:'power3.out',
        });
    },
{dependencies: [current]});

return (
    <div className="progress">
        <div className="progress-track">
            <div className="progress-fill" ref={fillRef}/>
        </div>

        <ol className="progress-labels">
            {steps.map((label, i) => (
                <li
                key={label}
                className={i <= current ?"is-reached" : ""}
                aria-current= {i===current?"step": undefined}
                >
                    {label}
                </li>
            ))}
        </ol>
    </div>
);
}