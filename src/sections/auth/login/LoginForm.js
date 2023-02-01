import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import useValidator from 'src/utils/Validator';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();


  const { validate } = useValidator();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });


  const handleOnSubmit = (e) => {
    e.preventDefault();
    let target = Array.from(e.target);
    let validForm = true;
    let error = {};
    target.forEach((data) => {
      if (data.name) {
        let err = validate(data.name, data.value);
        if (err) {
          error[data.name] = err;
          validForm = false;
        }
      }
    });
    setErrors(() => ({ ...errors, ...error }));
    if (validForm) {
      // setShowLoading(() => true);
      // loginWithAccount();
    } else {
    }
  };
  const handleOnInput = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    // navigate('/dashboard', { replace: true });
  };

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <Stack spacing={3}>
      <TextField
            name="email"
            label="Email"
            value={inputValues.email}
            placeholder="Nhập email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={"bxs:user"} />
                </InputAdornment>
              ),
            }}
            autoComplete="none"
            error={errors.email ? true : false}
            helperText={errors.email}
            onInput={handleOnInput}
            autoFocus
          />

        <TextField
            name="password"
            label="Mật khẩu"
            value={inputValues.password}
            type={showPassword ? "text" : "password"}
            placeholder="Nhập mật khẩu"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={"bxs:lock"} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="none"
            error={errors.password ? true : false}
            helperText={errors.password}
            onInput={handleOnInput}
          />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
  
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Login
      </LoadingButton>
      </form>
    </>
  );
}
