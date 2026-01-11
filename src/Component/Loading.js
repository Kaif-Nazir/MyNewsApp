import { RotatingLines } from "react-loader-spinner";


export default function loader() {
    return (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}


