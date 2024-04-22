import { toast } from 'react-toastify';

const notice = (type, msg, title) => {
  const CustomToast = () => (
    <div>
      { title && <h4><strong>${ title }</strong></h4> }
      <div>
        <span class='fa fa-exclamation-triangle glyphicon glyphicon-alert'></span>&nbsp;
        <span>${ msg }</span>
      </div>
    </div>
  );

  toast.error(<CustomToast />, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined
  });
};

export { notice };
