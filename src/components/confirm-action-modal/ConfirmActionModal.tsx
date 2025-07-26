import { PackagePlus } from "lucide-react";
import React, { ReactElement, ReactNode, useCallback, useRef } from "react";


export default function ConfirmActionModal({
    handleConfirm,
    confirmTextDescription,
    confirmTextOnBtn,
    openButton,
}: {
    handleConfirm: (...args: any) => void;
    confirmTextDescription: string;
    confirmTextOnBtn: string;
    openButton: ReactNode;
}) {
    const ref = useRef<null | HTMLInputElement>(null);
    
    const handleYes = useCallback(() => {
        ref.current && ref.current.click();
        handleConfirm();
    }, [ref]);

    const handleNo = useCallback(() => {
        ref.current && ref.current.click();
    }, [ref]);


    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my_modal_confirm">
                {openButton}
            </label>

            {/* Put this part before </body> tag */}
            <input ref={ref} type="checkbox" id="my_modal_confirm" className="modal-toggle z-50" />
            <div className="modal modal-bottom md:modal-middle z-50" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Confirm action</h3>
                    <span>{confirmTextDescription}</span> 

                    <div className="flex flex-col gap-2 mt-2">
                        <button className="btn btn-soft btn-primary w-full" onClick={handleNo}>Cancel</button>
                        <button className="btn btn-soft btn-error w-full" onClick={handleYes}>{confirmTextOnBtn}</button>
                    </div>   
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_confirm">Close</label>
            </div>
        </>
    );
}