import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function handleAlert(text) {
  MySwal.fire({
    title: <h4>{text}</h4>,
    background: "#191919",
    confirmButtonColor: "#c89500",
    color: "white",
    icon: "warning",
    iconColor: "#c89500",
    focusConfirm: false,
    focusCancel: true,
    showCloseButton: false,
  });
}

export default handleAlert;
