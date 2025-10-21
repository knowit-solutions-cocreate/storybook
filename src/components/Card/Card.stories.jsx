// ABOUTME: Storybook stories demonstrating Card component variants and usage.
// ABOUTME: Shows all color variants with different content configurations.

import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'lightPurple', 'lightPink', 'purple'],
      description: 'Visual variant of the card',
    },
    header: {
      control: 'text',
      description: 'Optional header content',
    },
    footer: {
      control: 'text',
      description: 'Optional footer content',
    },
  },
};

export const Default = {
  args: {
    children: 'This is a card with Knowit White background. It has a subtle shadow and clean layout following the Knowit brand guidelines.',
  },
};

export const WithHeader = {
  args: {
    header: 'Card Title',
    children: 'Card content goes here. The header is separated with a border for clear visual hierarchy.',
  },
};

export const WithFooter = {
  args: {
    children: 'This card has a footer section for actions or additional information.',
    footer: 'Footer content',
  },
};

export const WithHeaderAndFooter = {
  args: {
    header: 'Complete Card',
    children: 'This card demonstrates all three sections: header, body, and footer working together.',
    footer: 'Card Footer',
  },
};

export const LightPurple = {
  args: {
    variant: 'lightPurple',
    header: 'Light Purple Variant',
    children: 'This card uses the Knowit Light Purple (#F7F6FF) background color with proper contrast.',
  },
};

export const LightPink = {
  args: {
    variant: 'lightPink',
    header: 'Light Pink Variant',
    children: 'This card uses the Knowit Light Pink (#FFEBDD) background color.',
  },
};

export const Purple = {
  args: {
    variant: 'purple',
    header: 'Purple Variant',
    children: 'This card uses the Knowit Purple (#CFCEFF) accent color as background.',
  },
};

export const CustomContent = {
  args: {
    variant: 'lightPurple',
    header: (
      <div>
        <h3 style={{ margin: 0 }}>Rich Content Header</h3>
        <p style={{ margin: '8px 0 0', fontSize: '14px', opacity: 0.8 }}>
          Subtitle or description
        </p>
      </div>
    ),
    children: (
      <div>
        <p style={{ margin: '0 0 16px' }}>
          The Card component accepts any React nodes as children, allowing for flexible content composition.
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>24px border radius (Knowit standard)</li>
          <li>Proper color contrast</li>
          <li>Subtle shadow for depth</li>
          <li>Responsive hover state</li>
        </ul>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #372BC5', background: 'transparent', cursor: 'pointer' }}>
          Cancel
        </button>
        <button style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: '#372BC5', color: '#FEFBE6', cursor: 'pointer' }}>
          Confirm
        </button>
      </div>
    ),
  },
};
