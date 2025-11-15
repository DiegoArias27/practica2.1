import React from 'react';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';

function FormsScreen() {
  const [values, setValues]= React.useState
  return (
    <Checkbox isDisabled={false} isInvalid={true} size="md">
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
}

export default FormsScreen;
