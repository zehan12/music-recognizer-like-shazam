import { mergeClassName } from "../../utils/helpers";

const Container = (props) => {
    return (
        <div className={mergeClassName(
            'w-full max-w-screen mx-auto px-6 py-3',
            props.className

        )}
            style={props.style}

        >
            {props.children}
        </div>
    )
}

export default Container;