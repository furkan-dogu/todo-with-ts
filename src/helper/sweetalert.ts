import Swal from "sweetalert2";

export enum SweetAlertIcons {
  ERROR = "error",
  SUCCESS = "success",
}

export const notify = (
  msg: string,
  icon: SweetAlertIcons,
) =>
  Swal.fire({
    text: msg,
    icon: icon,
    timer: 3000,
    timerProgressBar: true,
    position: "center",
  });