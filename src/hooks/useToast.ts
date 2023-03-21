import { makeStyles } from "@mui/styles"
import { useCallback } from "react";
import Swal, { SweetAlertOptions } from "sweetalert2";

export type ToastOptions = Omit<SweetAlertOptions, 'toast'>;

const useStyles = makeStyles(theme => ({
    zIndex: {
        zIndex: 9999999999,
    },
    error: {
        borderLeft: '8px solid red'
    },
    success: {
        borderLeft: '8px solid green'
    }
}))

export const useToast = () => {
    const classes = useStyles();

    //     const Toast = Swal.mixin({
    //         customClass: { container: classes.zIndex, popup: classes.error },
    //         toast: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 2500,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //             toast.addEventListener('mouseenter', Swal.stopTimer)
    //             toast.addEventListener('mouseleave', Swal.resumeTimer)
    //         }
    //     })
        
    //     Toast.fire({
    //         icon: 'error',
    //         // title: `<p>Error...</p>`,
    //         title: `<p style="font-size:20px;padding:0px;margin:0px">Error...</p>`,
    //         // title: `<p style="font-size:20px;padding:0px;margin:0px">${error.message}</p>`,
    //         // text: error.message,
    //         text: 'este es el texto',
    //     })


    const showToast = useCallback((options: ToastOptions) => {
        
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            ...options
            
        })
        
        return Toast.fire({

            // icon: 'error',
            // // title: `<p>Error...</p>`,
            // title: `<p style="font-size:20px;padding:0px;margin:0px">Error...</p>`,
            // // title: `<p style="font-size:20px;padding:0px;margin:0px">${error.message}</p>`,
            // // text: error.message,
            // text: 'este es el texto',
            ...options,
            customClass: { container: classes.zIndex, popup: (options.icon === 'success') ? classes.success : classes.error },
        })

        // return Swal.fire({
        //   toast: true,
        //   position: 'top',
        //   showConfirmButton: false,
        //   timer: 3000,
        //   ...options,
        // });


      }, []);
    
      return showToast;
    }