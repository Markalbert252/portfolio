const Modal = () => {
    return (
        <dialog id="my_modal_3" className="modal bg-black bg-opacity-60" open>
            <div className="modal-box rounded-sm">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4 text-red-500 font-semibold">Still in Development Process!</p>
            </div>
        </dialog>
    )
}

export default Modal;