'use client'
import { Button } from '@/shared/components/ui/button'
import posthog from 'posthog-js'

type TrackingButtonProps = React.ComponentProps<typeof Button> & {
  eventName: string
  eventProperties?: Record<string, unknown>
}

export const TrackingButton: React.FC<TrackingButtonProps> = ({
  children,
  eventName,
  eventProperties,
  ...props
}) => {
  return (
    <Button
      {...props}
      data-event-name={eventName}
      onClick={() => posthog.capture(eventName, eventProperties)}
    >
      {children}
    </Button>
  )
}
