import { useEffect, useRef, useState } from "react";

const useChangeStatus = (attr) => {
    const [status, setStatus] = useState("equal");
    let prevAttr = useRef(null);

    useEffect(() => {
        if (!prevAttr.current) {
            prevAttr.current = attr;
            setStatus("equal");
        } else {
            if (prevAttr.current !== attr) {
                prevAttr.current < attr
                    ? setStatus("increase")
                    : setStatus("decrease");
            }
            prevAttr.current = attr;
        }
    }, [attr]);
    return status;
};

export default useChangeStatus;
