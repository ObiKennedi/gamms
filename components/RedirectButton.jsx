export const RedirectButton = ({ href, children }) => {
    const handleRedirect = () => {
        window.location.href = href;
    };

    return (
        <button onClick={handleRedirect}>
            {children}
        </button>
    );
};
