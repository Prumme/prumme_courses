function Button(props) {

    var classStyle = "rounded-md whitespace-nowrap w-[325px] text-center py-2 cursor-pointer shadow-md hover:shadow-inner hover:shadow-none "
    switch (props.type) {
        case "alert":
            classStyle = classStyle + "bg-button-alert"
            break;

        case "confirm":
            classStyle = classStyle + "bg-button-confirm"
            break;

        default:
            classStyle = classStyle + "bg-button-normal"
            break;
    }


    return (
        <div onClick={props.function} className={classStyle}>
            <p>{props.message}</p>
        </div>
    );
}

export default Button;
