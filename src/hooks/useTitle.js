const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Edulan`;
    }, [title])
}

export default useTitle;