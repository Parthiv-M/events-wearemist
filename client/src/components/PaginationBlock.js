import { Link } from 'react-router-dom';

const PaginationBlock = (props) => {

    const currentPage = { borderRadius: "50%", backgroundColor: "#6EE6B6" };
    const otherPage = { borderRadius: "50%" };

    return (
        <div className="container mx-auto my-5 text-white">
            <div className="d-flex justify-content-center mx-auto">
                {
                    parseInt(props.current) > 0
                    && 
                    <Link to={`/events/${props.type}/${parseInt(props.current) - 1}`} className="mx-2">
                        <p style={{ color: "#6EE6B6" }}>
                            { "<<" } Prev</p>
                    </Link>
                }
                {
                    props.pages.map((page) => {
                        return (
                            <Link key={page} to={`/events/past/${page}`}>
                                <button style={parseInt(props.current) === parseInt(page) ? currentPage : otherPage} className="px-2 mx-2 border-0">
                                    {page + 1}
                                </button>
                            </Link>
                        )
                    })
                }
                {
                    parseInt(props.current) < props.pages.length - 1
                    && 
                    <Link to={`/events/${props.type}/${parseInt(props.current) + 1}`} className="mx-2">
                        <p style={{ color: "#6EE6B6" }}>
                            Next { ">>" }
                        </p>
                    </Link>
                }
            </div>
        </div>
    );
}

export default PaginationBlock;