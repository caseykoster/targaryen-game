import { useState, useRef, useEffect } from 'react'
import { nodes, edges, NODE_W, NODE_H, SVG_W, SVG_H } from './familyData'
import './App.css'

const POINTS = [3, 2, 1] // hintLevel 0, 1, 2
const MAX_SCORE = nodes.length * POINTS[0]

function getNodeById(id) {
  return nodes.find(n => n.id === id)
}

function checkGuess(node, guess) {
  const normalized = guess.toLowerCase().trim()
  return normalized.length > 0 && node.accepts.some(a => a === normalized)
}

function EdgePath({ edge }) {
  const from = getNodeById(edge.from)
  const to = getNodeById(edge.to)
  if (!from || !to) return null

  const x1 = from.x
  const y1 = from.y + NODE_H / 2
  const x2 = to.x
  const y2 = to.y - NODE_H / 2
  const midY = (y1 + y2) / 2
  const pathD = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`

  return (
    <path
      d={pathD}
      fill="none"
      stroke={edge.skipped ? '#554433' : '#7a5c2e'}
      strokeWidth={edge.skipped ? 1.5 : 2}
      strokeDasharray={edge.skipped ? '8 5' : undefined}
    />
  )
}

function NodeBox({ node, solved, pointsEarned, flash, onClick }) {
  return (
    <g
      transform={`translate(${node.x - NODE_W / 2}, ${node.y - NODE_H / 2})`}
      onClick={() => !solved && onClick(node)}
      style={{ cursor: solved ? 'default' : 'pointer' }}
      role={solved ? undefined : 'button'}
      aria-label={solved ? node.name : 'Click to guess'}
    >
      <rect
        width={NODE_W}
        height={NODE_H}
        rx={7}
        ry={7}
        className={`node-rect ${solved ? 'solved' : 'unsolved'} ${flash ? 'flash' : ''}`}
      />
      {solved ? (
        <>
          <text x={NODE_W / 2} y={NODE_H / 2 + 2} textAnchor="middle" className="node-name">
            {node.name}
          </text>
          {pointsEarned != null && (
            <text x={NODE_W / 2} y={NODE_H / 2 + 16} textAnchor="middle" className="node-points">
              {'★'.repeat(pointsEarned)}
            </text>
          )}
        </>
      ) : (
        <text x={NODE_W / 2} y={NODE_H / 2 + 7} textAnchor="middle" className="node-question">
          ?
        </text>
      )}
    </g>
  )
}

export default function App() {
  const [solved, setSolved] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tg_solved')) || {} } catch { return {} }
  })
  const [earned, setEarned] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tg_earned')) || {} } catch { return {} }
  })
  const [flashing, setFlashing] = useState({})
  const [activeNode, setActiveNode] = useState(null)
  const [hintLevel, setHintLevel] = useState(0) // 0=none, 1=epithet, 2=full
  const [wrongCount, setWrongCount] = useState(0)
  const [guess, setGuess] = useState('')
  const [wrong, setWrong] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])
  useEffect(() => { localStorage.setItem('tg_solved', JSON.stringify(solved)) }, [solved])
  useEffect(() => { localStorage.setItem('tg_earned', JSON.stringify(earned)) }, [earned])

  useEffect(() => {
    if (activeNode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [activeNode])

  function handleNodeClick(node) {
    setActiveNode(node)
    setHintLevel(0)
    setWrongCount(0)
    setGuess('')
    setWrong(false)
  }

  function handleRevealHint() {
    setHintLevel(h => Math.min(h + 1, 2))
    inputRef.current?.focus()
  }

  function handleGuessSubmit(e) {
    e.preventDefault()
    if (!activeNode) return

    if (checkGuess(activeNode, guess)) {
      const pts = Math.max(0, POINTS[hintLevel] - wrongCount)
      setSolved(s => ({ ...s, [activeNode.id]: true }))
      setEarned(e => ({ ...e, [activeNode.id]: pts }))
      setFlashing(f => ({ ...f, [activeNode.id]: true }))
      setTimeout(() => setFlashing(f => ({ ...f, [activeNode.id]: false })), 600)
      setActiveNode(null)
      setGuess('')
      setWrong(false)
    } else {
      setWrongCount(c => c + 1)
      setWrong(true)
      inputRef.current?.select()
    }
  }

  function handleClose() {
    setActiveNode(null)
    setGuess('')
    setWrong(false)
    setWrongCount(0)
  }

  function handleReset() {
    localStorage.removeItem('tg_solved')
    localStorage.removeItem('tg_earned')
    setSolved({})
    setEarned({})
    setFlashing({})
    setActiveNode(null)
    setHintLevel(0)
    setWrongCount(0)
    setGuess('')
    setWrong(false)
  }

  const solvedCount = Object.values(solved).filter(Boolean).length
  const totalCount = nodes.length
  const score = Object.values(earned).reduce((a, b) => a + b, 0)
  const allSolved = solvedCount === totalCount

  const pendingPoints = activeNode ? Math.max(0, POINTS[hintLevel] - wrongCount) : null

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-left">
            <h1>House Targaryen</h1>
            <p className="subtitle">Family Tree Quiz &mdash; A Song of Ice and Fire</p>
          </div>
          <div className="header-right">
            <div className="stat-group">
              <span className="stat-label">Identified</span>
              <span className="stat-value">{solvedCount} / {totalCount}</span>
              <div className="progress-wrap">
                <div
                  className="progress-bar"
                  style={{ width: `${(solvedCount / totalCount) * 100}%` }}
                />
              </div>
            </div>
            <div className="stat-group">
              <span className="stat-label">Score</span>
              <span className="stat-value score-value">{score} / {MAX_SCORE}</span>
            </div>
            <button className="btn-reset" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </header>

      {allSolved && (
        <div className="victory-banner">
          Fire and Blood — You have named them all! &nbsp;{score} / {MAX_SCORE} pts
        </div>
      )}

      <div className="tree-container">
        <svg width={SVG_W} height={SVG_H} className="tree-svg">
          {edges.map((edge, i) => (
            <EdgePath key={i} edge={edge} />
          ))}

          <text x={330} y={847} textAnchor="middle" className="skip-label">
            &#x2015; ~7 kings &#x2015;
          </text>

          {nodes.map(node => (
            <NodeBox
              key={node.id}
              node={node}
              solved={!!solved[node.id]}
              pointsEarned={earned[node.id]}
              flash={!!flashing[node.id]}
              onClick={handleNodeClick}
            />
          ))}
        </svg>
      </div>

      {activeNode && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>&#x2715;</button>

            {/* Hint area */}
            <div className="hint-area">
              {hintLevel === 0 && (
                <button className="btn-hint" onClick={handleRevealHint}>
                  Show Hint &nbsp;<span className="hint-cost">−1 pt</span>
                </button>
              )}
              {hintLevel >= 1 && (
                <div className="hint-epithet">{activeNode.shortHint}</div>
              )}
              {hintLevel === 1 && (
                <button className="btn-hint btn-hint-secondary" onClick={handleRevealHint}>
                  Show Full Clue &nbsp;<span className="hint-cost">−1 pt</span>
                </button>
              )}
              {hintLevel >= 2 && (
                <div className="hint-full">{activeNode.hint}</div>
              )}
            </div>

            {/* Points indicator */}
            <div className="points-indicator">
              {'★'.repeat(pendingPoints)}{'☆'.repeat(POINTS[0] - pendingPoints)}
              <span className="points-label">{pendingPoints} pt{pendingPoints !== 1 ? 's' : ''} for correct answer</span>
            </div>

            <form onSubmit={handleGuessSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={guess}
                onChange={e => { setGuess(e.target.value); setWrong(false) }}
                placeholder="Enter name…"
                className={`guess-input ${wrong ? 'wrong' : ''}`}
                autoComplete="off"
                spellCheck="false"
              />
              <div className="modal-buttons">
                <button type="submit" className="btn-submit">Guess</button>
                <button type="button" className="btn-cancel" onClick={handleClose}>Skip</button>
              </div>
            </form>

            {wrong && (
              <div className="wrong-msg">
                Not quite — try again! &nbsp;<span className="wrong-penalty">−1 pt</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
