import { colors } from '@stamblew-ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <>
      {Object.entries(colors).map(([key, color]) => (
        <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast('white', color) > 4.5 ? 'white' : 'black',
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </>
  )
}
