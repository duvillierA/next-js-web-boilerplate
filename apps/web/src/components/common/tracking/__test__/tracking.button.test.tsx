import { TrackingButton } from '@/components/common/tracking/button'
import posthog from 'posthog-js'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'

vi.mock('posthog-js', () => ({
  default: {
    capture: vi.fn(),
  },
}))

describe('TrackingButton', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })
  it('captures click event in PostHog', async () => {
    const { getByRole } = render(
      <TrackingButton eventName="button_clicked" eventProperties={{ foo: 'bar' }}>
        Track Click
      </TrackingButton>,
    )
    const button = getByRole('button', { name: /track click/i })
    expect(button).toHaveAttribute('data-event-name', 'button_clicked')

    await button.click()

    expect(posthog.capture).toHaveBeenCalledWith('button_clicked', {
      foo: 'bar',
    })
  })
})
