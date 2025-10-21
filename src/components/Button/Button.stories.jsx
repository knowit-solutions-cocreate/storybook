// ABOUTME: Storybook stories demonstrating Button component variants, sizes, and states.
// ABOUTME: Shows all combinations of variants, sizes, disabled states, and interactive examples.

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const SmallSize = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const MediumSize = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium Button',
  },
};

export const LargeSize = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Interactive = {
  args: {
    variant: 'primary',
    children: 'Click Me!',
  },
  render: (args) => {
    const handleClick = () => {
      alert('Button clicked!');
    };

    return <Button {...args} onClick={handleClick} />;
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Primary Variant</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
          <Button variant="primary" size="medium" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Secondary Variant</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="medium">Medium</Button>
          <Button variant="secondary" size="large">Large</Button>
          <Button variant="secondary" size="medium" disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Outline Variant</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="outline" size="small">Small</Button>
          <Button variant="outline" size="medium">Medium</Button>
          <Button variant="outline" size="large">Large</Button>
          <Button variant="outline" size="medium" disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Small Size</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" size="small">Primary</Button>
          <Button variant="secondary" size="small">Secondary</Button>
          <Button variant="outline" size="small">Outline</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Medium Size</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" size="medium">Primary</Button>
          <Button variant="secondary" size="medium">Secondary</Button>
          <Button variant="outline" size="medium">Outline</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Large Size</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" size="large">Primary</Button>
          <Button variant="secondary" size="large">Secondary</Button>
          <Button variant="outline" size="large">Outline</Button>
        </div>
      </div>
    </div>
  ),
};

export const DisabledStates = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>Secondary Disabled</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
    </div>
  ),
};
