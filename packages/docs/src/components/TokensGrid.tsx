import '../styles/tokens-grid.css'

type TokensGridProps = {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {hasRemValue && <th></th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            {hasRemValue && (
              <td>
                <div
                  style={{
                    width: value,
                    height: '20px',
                    backgroundColor: '#5186e2',
                  }}
                ></div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
