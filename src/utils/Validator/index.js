export default function useValidator() {
  const validateRequired = (name, value, error) => {
    if (!value || value === 0) {
      return false;
    }
    return true;
  };

  const validateEmail = (name, value, error) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(value)) {
      return false;
    }
    return true;
  };

  const validate = (name, value) => {
    console.log(name)
    console.log(value)
    if(name==="newpassword"){
      name="Mật khẩu mới"
    }
    if(name==="confirmpassword"){
      name="Xác nhận mật khẩu"
    }
    if(name==="fullname"){
      name="Họ tên"
    }
    const firstChar = name.substring(0, 1).toUpperCase();
    if (!validateRequired(name, value)) {
      return firstChar + name.substring(1) + " phải bắt buộc nhập!";
    }
    switch (name) {
      case "email":
        // if (!validateEmail(name, value)) {
        //   return "Email không hợp lệ!";
        // }
        break;
      default:
    }
  };


  const validateCreateProject = (name, value) => {
    // const firstChar = name.substring(0, 1).toUpperCase();
    if (!validateRequired(name, value)) {
      if(name==="NameOfProject"){
        name="Tên dự án"
      }
      if(name==="intermediary"){
        name="Đầu mối"
      }
      if(name==="investor"){
        name="Chủ đầu tư"
      }
      if(name==="technicalProgress"){
        name="Tiến độ kỹ thuật"
      }
      if(name==="solution"){
        name="Hướng xử lý"
      }
      if(name==="processingTime"){
        name="Thời gian xử lý"
      }
      if(name==="contractStatus"){
        name="Hiện trạng"
      }
      if(name==="installationProgress"){
        name="Tiến độ lắp đặt"
      }
      if(name==="issue"){
        name="Tồn đọng kỹ thuật / thiết bị"
      }
      if(name==="projectStatus"){
        name="Giao Hàng-Bàn Giao-Nghiệm Thu"
      }
      
      return  name + " phải bắt buộc nhập!";
    }
  };

  const validateTimeKeeping = (name, value) => {
    // const firstChar = name.substring(0, 1).toUpperCase();
    if (!validateRequired(name, value)) {
      if(name==="content"){
        name="Nội dung"
      }      
      return  name + " phải bắt buộc nhập!";
    }
  };

  return {
    validate,
    validateCreateProject,
    validateTimeKeeping
  };
}
