import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

// components
import { Box } from '@components/ui/Box';
import { Alert } from '@components/ui/Alert';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import { Checkbox } from '@components/ui/Checkbox';
import { LoginFormD } from './LoginForm.d';
import { LoginFormWrapper } from './LoginForm.styles';

const LoginForm: React.FC<LoginFormD> = ({
  isAuthenticated,
}) => {
  const [formData, setData] = useState({
    username: '',
    password: '',
  });
  const [redirect, setRedirect] = useState<boolean>(false);
  const [isAlertShow, setIsAlertShow] = useState<boolean>(false);
  const [isRememberMeChecked, setRememberMeChecked] = useState<boolean>(false);
  const [isDataValidate, setIsDataValidate] = useState<boolean | null>(true);

  const fieldset = [
    {
      id: 1,
      type: 'text',
      name: 'name',
      label: 'name',
      value: formData.username,
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      label: 'password',
      value: formData.password,
    },
  ];

  const handleChange = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('http://localhost:8080/api/admin/register', {
      first_name: formData.username,
      password: formData.password,
    });

    setRedirect(true);
    console.log(redirect);

    if (isDataValidate) {
      setIsDataValidate(false);
      setData(formData);
      // router.push(`/userProfile`)
    }
    setIsAlertShow(true);
  };

  const textAlert = isDataValidate
    ? 'All good'
    : 'Wrong username or password';

  const variantAlert = isDataValidate
    ? 'success'
    : 'danger';

  return (
    <LoginFormWrapper>
      <Alert
        isShow={isAlertShow}
        text={textAlert}
        variant={variantAlert}
      />
      <Box
        width="40%"
        p={SPACING.md}
        background={COLORS.white}
        borderRadius={BORDER_RADIUS.default}
      >
        {isAuthenticated && 'ok'}
        <Box my={SPACING.md}>
          <form
            onSubmit={(e) => handleSubmit(e)}
          />
          {fieldset.map((field) => (
            <Input
              key={field.id}
              label={field.name}
              onChange={(e) => handleChange(e)}
            />
          ))}
          <Checkbox
            value="remember"
            label="I agree with terms"
            checked={isRememberMeChecked}
            onChange={() => setRememberMeChecked(!isRememberMeChecked)}
          />
        </Box>

        <Button
          name="Sign in"
          variant="primary"
          onClick={(e) => handleSubmit(e)}
        />
      </Box>
    </LoginFormWrapper>
  );
};

export default LoginForm;
