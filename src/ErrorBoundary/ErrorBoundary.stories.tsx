import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest'
import results from '../../.jest-test-results.json'

import { ErrorBoundary } from './ErrorBoundary';

export default {
  title: 'ErrorBoundary'
}

const MyEventError = ({ onClick }: { onClick: any }) => {
  return <div onClick={onClick}>{text('text', 'Hello')}</div>
}

const MyComponentError = () => {
  const [componentError, setComponentError] = useState(false)
  const doComponentError = () => {
    setComponentError(true)
  }

  if (componentError) {
    throw "Component Error thrown"
  }

  return <div onClick={e => doComponentError()}>Click here for Component Error</div>
}

export const withEventError = () => {
  return (
    <ErrorBoundary >
      <MyEventError onClick={action('clicked')} />
    </ErrorBoundary>
  )
}
withEventError.story = {
  decorators: [withKnobs,withTests({ results: results })],
  parameters: {
    notes: "Hello",
    jest: [
      'ErrorBoundary.test.ts'
    ]
  }
}

export const withComponentError = () => (
  <ErrorBoundary >
    <MyComponentError />
  </ErrorBoundary>
)
withComponentError.story = {
  decorators: [withKnobs],
  parameters: {
    notes: "World"
  }
}