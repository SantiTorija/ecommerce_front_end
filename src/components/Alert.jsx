import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const handleAlert = (text) =>
  MySwal.fire({
    title: <p>{text}</p>,
    background: "#4A151B",
    confirmButtonColor: "#c89500",
    color: "white",
    icon: "warning",
    iconColor: "#c89500",
    focusConfirm: false,
    focusCancel: true,
    showCloseButton: false,
  });

export default handleAlert;
