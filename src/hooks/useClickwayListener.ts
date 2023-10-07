import { useEffect, RefObject } from "react";




// a hook to perform an action e.g close a modal when a user click outside of the target element passed to the ref

function useClickAwayListener(ref: RefObject<any>, callback: ()=>void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}

export default useClickAwayListener;
