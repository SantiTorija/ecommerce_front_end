import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const handleAlert = () =>
	MySwal.fire({
		title: <p>This function is out of scope.</p>,
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
