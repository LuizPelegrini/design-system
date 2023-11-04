import { ComponentPropsWithoutRef, FC } from 'react'
import { Text } from './Text'

type MultiStepProps = ComponentPropsWithoutRef<'div'> & {
  currentStep?: number
  totalSteps: number
}

export const MultiStep: FC<MultiStepProps> = ({
  currentStep = 1,
  totalSteps,
}) => {
  return (
    <div>
      <Text size="xs" className="text-gray200">
        Step {currentStep} of {totalSteps}
      </Text>
      <div className={`flex gap-2 mt-1`}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`flex-grow h-1 rounded-px ${
              index <= currentStep - 1 ? 'bg-gray100' : 'bg-gray600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
