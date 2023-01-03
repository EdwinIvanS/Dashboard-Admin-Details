import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BuilComp = () => {
    return (
        <div className="ad-container position-relative h-100 p-4">
            <div className="container-build">
                    <span className="image-cover"></span>
                <div className="d-flex flex-column flex-auto position-relative">
                    <h5 className="pt-2 text-font-bold text-white">Build Future with Us</h5>
                    <p className="text-white">
                        Don't miss the opportunity of working on the cutting-edge technology and the most futuristics projects
                    </p>
                    <div className="mt-auto mb-0 text-white">
                        Read More
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ml-1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuilComp;