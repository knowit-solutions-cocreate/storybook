// ABOUTME: Storybook stories demonstrating Input component variants and usage.
// ABOUTME: Shows all sizes, states, types, and interactive examples with Knowit brand styling.

import React, { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    error: {
      control: 'text',
      description: 'Error message displayed below the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when input value changes',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the input',
    },
  },
};

export const Default = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

export const Small = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'small',
  },
};

export const Medium = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size (default)',
    size: 'medium',
  },
};

export const Large = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'large',
  },
};

export const WithPlaceholder = {
  args: {
    label: 'Username',
    placeholder: 'johndoe@example.com',
  },
};

export const WithError = {
  args: {
    label: 'Email Address',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    placeholder: 'name@example.com',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    value: 'This field is disabled',
    disabled: true,
  },
};

export const EmailType = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'name@example.com',
  },
};

export const PasswordType = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const NumberType = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
  },
};

export const TelephoneType = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
  },
};

export const URLType = {
  args: {
    label: 'Website',
    type: 'url',
    placeholder: 'https://example.com',
  },
};

export const WithoutLabel = {
  args: {
    placeholder: 'Input without label',
  },
};

export const AllSizesComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input
        label="Small Size"
        placeholder="Small input"
        size="small"
      />
      <Input
        label="Medium Size"
        placeholder="Medium input"
        size="medium"
      />
      <Input
        label="Large Size"
        placeholder="Large input"
        size="large"
      />
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);

      // Simple email validation
      if (newValue && !newValue.includes('@')) {
        setError('Email must contain @ symbol');
      } else if (newValue && newValue.length < 5) {
        setError('Email is too short');
      } else {
        setError('');
      }
    };

    return (
      <div>
        <Input
          label="Interactive Email Input"
          type="email"
          placeholder="Enter your email"
          value={value}
          onChange={handleChange}
          error={error}
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </p>
      </div>
    );
  },
};

export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (field) => (e) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: '',
        }));
      }
    };

    const validateForm = () => {
      const newErrors = {};

      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }

      if (!formData.email.includes('@')) {
        newErrors.email = 'Please enter a valid email';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            error={errors.lastName}
          />

          <Input
            label="Email"
            type="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange('email')}
            error={errors.email}
          />

          <Input
            label="Phone (Optional)"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange('phone')}
          />

          <button
            type="submit"
            style={{
              marginTop: '8px',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              background: '#372BC5',
              color: '#FEFBE6',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  },
};
