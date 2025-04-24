import { Bounce, ToastContainer } from "react-toastify";

type MenssageContainerProps = {
    children: React.ReactNode;
};

export function MenssageContainer({ children }: MenssageContainerProps) {
    return (
        <>
            {children}
            <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Bounce}
                />
        </>
    );
}
