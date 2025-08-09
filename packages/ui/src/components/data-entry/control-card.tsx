'use client'

import { useCallback, useState, type ComponentProps, type MouseEvent } from 'react'

import { cn } from '../../utils'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '../interactive/card'
import { Checkbox } from './checkbox'
import { RadioGroupItem } from './radio-group'
import { Switch } from './switch'

// Control types
type ControlKind = 'checkbox' | 'radio' | 'switch'

// Base props for all control cards
interface ControlCardProps extends ComponentProps<'div'> {
  /** Alignment of the control */
  alignLabel?: 'left' | 'right'
  /** Whether the control is checked */
  checked?: boolean
  /** Control kind */
  controlKind: ControlKind
  /** Default checked state for uncontrolled components */
  defaultChecked?: boolean
  /** Whether the control is disabled */
  disabled?: boolean
  /** Label text for the control */
  label?: string
  /** Value for radio controls */
  value?: string
  /** Callback when the control state changes */
  onCheckedChange?: (checked: boolean) => void
  /** Whether to show selected styling when checked */
  showAsSelectedWhenChecked?: boolean
}

/**
 * ControlCard component that renders a card with an embedded form control.
 * Supports checkbox, radio, and switch controls with proper styling and accessibility.
 */
function ControlCard({
  className,
  children,
  controlKind,
  checked,
  defaultChecked,
  disabled,
  label,
  value,
  onCheckedChange,
  showAsSelectedWhenChecked = true,
  onClick,
  alignLabel,
  ...props
}: ControlCardProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false)
  const isControlled = checked !== undefined
  const isChecked = isControlled ? checked : internalChecked

  const handleCheckedChange = useCallback(
    (newChecked: boolean) => {
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onCheckedChange?.(newChecked)
    },
    [isControlled, onCheckedChange],
  )

  const handleCardClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      // Don't toggle if disabled
      if (disabled) {
        return
      }

      // For radio controls, we only toggle if not already checked
      //   if (controlKind === 'radio' && isChecked) {
      //     return
      //   }

      // Toggle the control state
      const newChecked = !isChecked
      handleCheckedChange(newChecked)

      // Call the original onClick if provided
      onClick?.(event)
    },
    [disabled, controlKind, isChecked, handleCheckedChange, onClick],
  )

  // Render the appropriate control based on type
  const renderControl = () => {
    switch (controlKind) {
      case 'checkbox':
        return (
          <Checkbox
            data-slot="control-card-checkbox"
            disabled={disabled}
            checked={isChecked}
            onCheckedChange={handleCheckedChange}
          />
        )

      case 'radio':
        return (
          <RadioGroupItem
            data-slot="control-card-radio"
            value={value || ''}
            disabled={disabled}
            checked={isChecked}
          />
        )

      case 'switch':
        return (
          <Switch
            data-slot="control-card-switch"
            disabled={disabled}
            checked={isChecked}
            onCheckedChange={handleCheckedChange}
          />
        )

      default:
        return null
    }
  }

  return (
    <Card
      interactive
      selected={showAsSelectedWhenChecked && isChecked}
      disabled={disabled}
      data-slot="control-card"
      data-disabled={disabled}
      className={className}
      onClick={handleCardClick}
      {...props}
    >
      <CardHeader className={cn('gap-y-0', alignLabel === 'right' && 'grid-cols-[auto_1fr]')}>
        <CardAction
          className={cn(
            alignLabel === 'right'
              ? 'col-start-1 row-span-2 row-start-1 self-start justify-self-start'
              : '',
          )}
        >
          {renderControl()}
        </CardAction>
        <CardTitle className="text-base font-normal">{label}</CardTitle>
        <CardDescription>{children}</CardDescription>
      </CardHeader>
    </Card>
  )
}

/**
 * CheckboxCard component for checkbox-style control cards
 */
function CheckboxCard(props: Omit<ControlCardProps, 'controlKind'>) {
  return (
    <ControlCard
      {...props}
      controlKind="checkbox"
    />
  )
}

/**
 * RadioCard component for radio-style control cards
 * This component should be used within a RadioGroup context
 */
function RadioCard(props: Omit<ControlCardProps, 'controlKind'>) {
  return (
    <ControlCard
      {...props}
      controlKind="radio"
    />
  )
}

/**
 * SwitchCard component for switch-style control cards
 */
function SwitchCard(props: Omit<ControlCardProps, 'controlKind'>) {
  return (
    <ControlCard
      {...props}
      controlKind="switch"
    />
  )
}

export { CheckboxCard, ControlCard, RadioCard, SwitchCard, type ControlCardProps }
