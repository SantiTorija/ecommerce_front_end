import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function handleAlert(text) {
  MySwal.fire({
    title: <h4>{text}</h4>,
    background: "#191919",
    confirmButtonColor: "#F0A202",
    color: "#F0F0F0",
    icon: "warning",
    iconColor: "#F0A202",
    focusConfirm: false,
    focusCancel: true,
    showCloseButton: false,
  });
}

export default handleAlert;
